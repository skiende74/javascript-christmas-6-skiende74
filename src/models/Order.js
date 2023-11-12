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

  getOrder() {
    return this.#order;
  }

  getNumberOfDesserts() {
    const desserts = Object.keys(Conditions.MENUS_PRICES.desserts);
    return Object.entries(this.#order).reduce(
      (acc, [menu, count]) => acc + desserts.includes(menu) * count,
      0,
    );
  }
  getNumberOfMain() {
    const main = Object.keys(Conditions.MENUS_PRICES.main);
    return Object.entries(this.#order).reduce(
      (acc, [menu, count]) => acc + main.includes(menu) * count,
      0,
    );
  }
}

export default Order;
