import { readDate, readOrder } from './views/InputView.js';

class App {
  async run() {
    const visitDate = await readVisitDate();
    const order = await readOrder();
  }

  async readVisitDate() {
    return Number(await readDate());
  }

  async readOrder() {
    return Number(await readOrder());
  }
}

export default App;
