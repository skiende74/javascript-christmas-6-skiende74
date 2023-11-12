/* eslint-disable no-await-in-loop */
import VisitDate from './models/VisitDate.js';
import Order from './models/Order.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    // const visitDate = await this.readVisitDate();
    // const order = await this.readOrder();
  }

  async readVisitDate() {
    while (true) {
      try {
        const date = await InputView.readDate();
        return new VisitDate(date);
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  }

  async readOrder() {
    while (true) {
      try {
        const order = await InputView.readOrder();
        return new Order(order);
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  }

  async robustInput(readline, parse, Object) {
    while (true) {
      try {
        const input = await readline();
        return new Object(parse(input));
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  }
}

export default App;
