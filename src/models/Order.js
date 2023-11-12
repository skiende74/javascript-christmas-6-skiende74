import Validation from '../Validation';

class Order {
  #order;

  constructor(order) {
    this.#order = order;
    Order.#validate(order);
  }

  static #validate(order) {
    Validation.validateOrderFormat(order);
    Validation.validateOrderMustInMenu(order);
    Validation.validateOrderCountOneOrMore(order);
    Validation.validateOrderNoRedundant(order);
    Validation.validateOrderNoOnlyBeverage(order);
    Validation.validateOrderNotOverTwenty(order);
  }
}

export default Order;
