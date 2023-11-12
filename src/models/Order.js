import Validation from '../Validation.js';
import Conditions from '../constants/Conditions.js';

class Order {
  #order;

  constructor(orderStr) {
    Order.#validate(orderStr);
    this.#order = this.#parse(orderStr);
  }

  static #validate(order) {
    Validation.validateOrderFormat(order);
    Validation.validateOrderMustInMenu(order);
    Validation.validateOrderCountOneOrMore(order);
    Validation.validateOrderNoRedundant(order);
    Validation.validateOrderNoOnlyBeverage(order);
    Validation.validateOrderNotOverTwenty(order);
  }

  #parse(orderStr) {
    return orderStr
      .split(',')
      .map((o) => ({ [o.split('-')[0]]: Number(o.split('-')[1]) }));
  }

  getPrice() {
    Object.values(this.#order).Conditions.MENUS_PRICES;
  }
}

export default Order;
