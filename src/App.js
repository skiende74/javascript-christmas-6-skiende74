import MainController from './controllers/MainController.js';

class App {
  // eslint-disable-next-line class-methods-use-this
  async run() {
    await new MainController().run();
  }
}

export default App;
