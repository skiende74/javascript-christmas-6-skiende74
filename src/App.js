/* eslint-disable no-await-in-loop */
import VisitDate from './models/VisitDate.js';
import Order from './models/Order.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Discounter from './models/Discounter.js';
import PresentEvent from './models/PresentEvent.js';
import BenefitList from './models/BenefitList.js';

class App {
  async run() {
    OutputView.printSplitter();
    OutputView.printGreeting();

    // 할인 전
    const aVisitDate = await App.#readVisitDate();
    const anOrder = await App.#readOrder();
    OutputView.printMenu(anOrder.getOrder());
    OutputView.printPriceBeforeDiscount(anOrder.getTotalPrice());

    // 혜택내역
    const discounts = new Discounter(aVisitDate, anOrder).getDiscounts();
    const isPresentGiven = new PresentEvent(anOrder.getTotalPrice()).isGiven();
    OutputView.printPresentEvent(isPresentGiven);
    OutputView.printBenfitList(discounts, isPresentGiven);

    // 총혜택
    const aBenefitList = new BenefitList(discounts, isPresentGiven);
    OutputView.printBenfitPrice(aBenefitList.getTotalBenefit());

    // 이후
    OutputView.printExpectedPurchase(
      anOrder.getTotalPrice() - aBenefitList.getTotalDiscountPrice(),
    );
    OutputView.printEventBadge(aBenefitList.getBadge());
    OutputView.printSplitter();
  }

  static async #readVisitDate() {
    return App.#robustInput(InputView.readDate, VisitDate);
  }

  static async #readOrder() {
    return App.#robustInput(InputView.readOrder, Order);
  }

  static async #robustInput(readline, Object) {
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
