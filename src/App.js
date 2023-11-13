/* eslint-disable no-await-in-loop */
import VisitDate from './domains/VisitDate.js';
import Order from './domains/Order.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Discounter from './services/Discounter.js';
import PresentEvent from './services/PresentEvent.js';
import BenefitList from './services/BenefitList.js';

class App {
  #aVisitDate;

  #anOrder;

  #discounts;

  #isPresentGiven;

  #aBenefitList;

  async run() {
    OutputView.printSplitter();
    OutputView.printGreetings();

    await this.#readInputs();
    this.#calculate();

    this.#printOrderDetails();
    this.#printBenefitDetails();

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

  #calculate() {
    this.#discounts = new Discounter(
      this.#aVisitDate,
      this.#anOrder,
    ).getDiscounts();
    this.#isPresentGiven = new PresentEvent(
      this.#anOrder.getTotalPrice(),
    ).isGiven();
    this.#aBenefitList = new BenefitList(this.#discounts, this.#isPresentGiven);
  }

  #printOrderDetails() {
    OutputView.printMenu(this.#anOrder.getOrder());
    OutputView.printPriceBeforeDiscount(this.#anOrder.getTotalPrice());
  }

  #printBenefitDetails() {
    OutputView.printPresentEvent(this.#isPresentGiven);
    OutputView.printBenefitList(this.#discounts, this.#isPresentGiven);

    OutputView.printBenefitPrice(this.#aBenefitList.getTotalBenefit());

    OutputView.printExpectedPurchase(
      this.#anOrder.getTotalPrice() -
        this.#aBenefitList.getTotalDiscountPrice(),
    );
    OutputView.printEventBadge(this.#aBenefitList.getBadge());
  }
}

export default App;
