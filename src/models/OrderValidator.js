import Errors from '../constants/Errors.js';
import Conditions from '../constants/Conditions.js';

class OrderValidator {
  #orders;

  constructor(ordersStr) {
    this.#orders = ordersStr.split(',');
  }

  validate() {
    this.#validateOrderFormat();
    this.#validateOrderMustInMenu();
    this.#validateOrderCountOneOrMore();
    this.#validateOrderNoRedundant();
    this.#validateOrderNoOnlyBeverage();
    this.#validateOrderNotOverTwenty();
  }

  #validateOrderFormat() {
    if (
      !this.#orders.every(
        (order) =>
          order.includes('-') &&
          !Number.isInteger(Number(order.split('-')[0])) &&
          Number.isInteger(Number(order.split('-')[1])),
      )
    )
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderMustInMenu() {
    const menus = Object.values(Conditions.MENUS_PRICES).flatMap((el) =>
      Object.keys(el),
    );
    if (!this.#orders.every((order) => menus.includes(order.split('-')[0])))
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderCountOneOrMore() {
    if (!this.#orders.every((order) => order.split('-')[1] >= 1))
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderNoRedundant() {
    const menus = this.#orders.map((order) => order.split('-')[0]);
    if (menus.length !== new Set(menus).size)
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderNoOnlyBeverage() {
    const beverages = Object.keys(Conditions.MENUS_PRICES.beverages);
    if (this.#orders.every((menu) => beverages.includes(menu.split('-')[0])))
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderNotOverTwenty() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);
    if (sum(this.#orders.map((o) => Number(o.split('-')[1]))) > 20)
      throw new Error(Errors.ORDER_FORMAT);
  }
}

export default OrderValidator;
