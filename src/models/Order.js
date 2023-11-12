import Validation from '../Validation.js';
import Conditions from '../constants/Conditions.js';
import OutputView from '../views/OutputView.js';

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
    return Object.fromEntries(
      orderStr.split(',').map((o) => this.#parseOneOrder(o)),
    );
  }

  #parseOneOrder(orderStr) {
    const [menu, count] = orderStr.split('-');
    return [menu, Number(count)];
  }

  #getMenuPrices() {
    return Object.values(Conditions.MENUS_PRICES).reduce(
      (acc, menuPrices) => ({ ...acc, ...menuPrices }),
      {},
    );
  }

  getTotalPrice() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);

    return sum(
      Object.entries(this.#order).map(
        ([menu, count]) => this.#getMenuPrices()[menu] * count,
      ),
    );
  }
}

export default Order;
