import Conditions from '../constants/Conditions.js';
import OrderValidator from './OrderValidator.js';

class Order {
  #order;

  constructor(orderStr) {
    Order.#validate(orderStr);
    this.#order = Order.#parse(orderStr);
  }

  getTotalPrice() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);

    return sum(
      Object.entries(this.#order).map(
        ([menu, count]) => Order.#getMenuPrices()[menu] * count,
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

  static #validate(orderStr) {
    new OrderValidator(orderStr).validate();
  }

  static #parse(orderStr) {
    return Object.fromEntries(
      orderStr.split(',').map((o) => Order.#parseOneOrderStr(o)),
    );
  }

  static #parseOneOrderStr(orderStr) {
    const [menu, count] = orderStr.split('-');
    return [menu, Number(count)];
  }

  static #getMenuPrices() {
    return Object.values(Conditions.MENUS_PRICES).reduce(
      (acc, menuPrices) => ({ ...acc, ...menuPrices }),
      {},
    );
  }
}

export default Order;
