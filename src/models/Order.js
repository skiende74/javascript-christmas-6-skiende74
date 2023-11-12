import Validation from '../Validation';

class Order {
  #order;

  constructor(order) {
    this.#order = order;
    Order.#validate(order);
  }

  static #validate(order) {
    Validation.validateOrderFormat(order);
    Validation.validateOrderNotInMenu(order);
    Validation.validateOrderCountOneOrMore(order);
    Validation.validateOrderRedundant(order);
  }
}

export default Order;
