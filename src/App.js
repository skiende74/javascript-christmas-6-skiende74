/* eslint-disable no-await-in-loop */
import VisitDate from './models/VisitDate.js';
import Order from './models/Order.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Discounter from './models/Discounter.js';
import PresentEvent from './models/PresentEvent.js';

class App {
  async run() {
    OutputView.printSplitter();
    OutputView.printGreeting();
    const aVisitDate = await this.readVisitDate();
    const anOrder = await this.readOrder();

    OutputView.printMenu();
    OutputView.printPriceBeforeDiscount();

    const discounts = new Discounter(aVisitDate).getDiscounts();
    const isPresentEvent = new PresentEvent(anOrder.getTotalPrice()).isGiven();
    OutputView.printPresentEvent(isPresentEvent);

    OutputView.printSplitter();
  }

  async readVisitDate() {
    return this.robustInput(InputView.readDate, VisitDate);
  }

  async readOrder() {
    return this.robustInput(InputView.readOrder, Order);
  }

  async robustInput(readline, Object) {
    while (true) {
      try {
        const input = await readline();
        return new Object(input);
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  }
}

export default App;
