import OutputView from '../views/OutputView.js';

class OrderController {
  #anOrder;

  constructor(anOrder) {
    this.#anOrder = anOrder;
  }

  print() {
    OutputView.printMenu(this.#anOrder.getOrder());
    OutputView.printPriceBeforeDiscount(this.#anOrder.getTotalPrice());
  }
}

export default OrderController;
