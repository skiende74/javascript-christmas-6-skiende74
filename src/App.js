import { readDate } from './views/InputView.js';

class App {
  async run() {
    const visitDate = await readVisitDate();
  }

  async readVisitDate() {
    return Number(await readDate());
  }
}

export default App;
