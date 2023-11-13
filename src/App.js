/* eslint-disable no-await-in-loop */
import VisitDate from './domains/VisitDate.js';
import Order from './domains/Order.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Discounter from './services/Discounter.js';
import PresentEvent from './services/PresentEvent.js';
import BenefitList from './services/BenefitList.js';
import OrderController from './controllers/OrderController.js';
import BenefitController from './controllers/BenefitController.js';

class App {
  #aVisitDate;

  #anOrder;

  async run() {
    OutputView.printSplitter();
    OutputView.printGreetings();

    await this.#readInputs();

    this.#runOrderController();
    this.#runBenefitController();

    OutputView.printSplitter();
  }

  async #readInputs() {
    this.#aVisitDate = await App.#readVisitDate();
    this.#anOrder = await App.#readOrder();
  }

  static async #readVisitDate() {
    return App.#robustInput(InputView.readDate, VisitDate);
  }

  static async #readOrder() {
    return App.#robustInput(InputView.readOrder, Order);
  }

  static async #robustInput(readline, Object) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        const input = await readline();
        return new Object(input);
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  }

  #runOrderController() {
    new OrderController(this.#anOrder).print();
  }

  #runBenefitController() {
    new BenefitController(this.#anOrder, this.#aVisitDate).print();
  }
}

export default App;
