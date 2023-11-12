import Validation from '../Validation';

class Order {
  #order;

  constructor(order) {
    this.#order = order;
    this.#validate(order);
  }

  #validate(order) {
    Validation.validateOrderFormat(order);
  }
}

export default Order;
