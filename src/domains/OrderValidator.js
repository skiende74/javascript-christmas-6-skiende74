/* eslint-disable class-methods-use-this */
import Errors from '../constants/Errors.js';
import Conditions from '../constants/Conditions.js';

class OrderValidator {
  #orderStrs;

  constructor(ordersStr) {
    this.#orderStrs = ordersStr.split(',');
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
    if (!this.#orderStrs.every((order) => this.#isValidOrderFormat(order)))
      throw new Error(Errors.ORDER_FORMAT);
  }

  #isValidOrderFormat(orderStr) {
    return (
      this.#count(orderStr, '-') === 1 &&
      this.#isNonNumeric(orderStr.split('-')[0]) &&
      this.#isInteger(orderStr.split('-')[1])
    );
  }

  #validateOrderMustInMenu() {
    const menus = Object.values(Conditions.MENUS_PRICES).flatMap((el) =>
      Object.keys(el),
    );
    if (!this.#orderStrs.every((order) => menus.includes(order.split('-')[0])))
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderCountOneOrMore() {
    if (!this.#orderStrs.every((order) => order.split('-')[1] >= 1))
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderNoRedundant() {
    const menus = this.#orderStrs.map((order) => order.split('-')[0]);
    if (menus.length !== new Set(menus).size)
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderNoOnlyBeverage() {
    const beverages = Object.keys(Conditions.MENUS_PRICES.beverages);
    if (this.#orderStrs.every((menu) => beverages.includes(menu.split('-')[0])))
      throw new Error(Errors.ORDER_FORMAT);
  }

  #validateOrderNotOverTwenty() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);
    if (sum(this.#orderStrs.map((o) => Number(o.split('-')[1]))) > 20)
      throw new Error(Errors.ORDER_FORMAT);
  }

  #count(string, pattern) {
    return string.split(pattern).length - 1;
  }

  #isInteger(str) {
    return Number.isInteger(Number(str));
  }

  #isNonNumeric(str) {
    return Number.isNaN(Number(str));
  }
}

export default OrderValidator;
