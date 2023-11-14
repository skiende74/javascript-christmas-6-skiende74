import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import OrderController from './OrderController.js';
import BenefitController from './BenefitController.js';

class MainController {
  #aVisitDate;

  #anOrder;

  async run() {
    OutputView.printGreetings();

    await this.#readInputs();

    this.#runOrderController();
    this.#runBenefitController();
  }

  #runOrderController() {
    new OrderController(this.#anOrder).print();
  }

  #runBenefitController() {
    new BenefitController(this.#anOrder, this.#aVisitDate).print();
  }

  async #readInputs() {
    this.#aVisitDate = await InputView.readVisitDate();
    this.#anOrder = await InputView.readOrder();
  }
}

export default MainController;
