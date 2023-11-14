import BenefitList from '../services/BenefitList.js';
import Discounter from '../services/Discounter.js';
import PresentEvent from '../services/PresentEvent.js';
import OutputView from '../views/OutputView.js';

class BenefitController {
  #anOrder;

  #discounts;

  #isPresentGiven;

  #aBenefitList;

  constructor(anOrder, aVisitDate) {
    this.#anOrder = anOrder;
    this.#discounts = new Discounter(aVisitDate, this.#anOrder).getDiscounts();
    this.#isPresentGiven = new PresentEvent(
      this.#anOrder.getTotalPrice(),
    ).isGiven();
    this.#aBenefitList = new BenefitList(this.#discounts, this.#isPresentGiven);
  }

  print() {
    OutputView.printPresentEvent(this.#isPresentGiven);
    OutputView.printBenefitList(this.#aBenefitList);

    OutputView.printBenefitPrice(this.#aBenefitList.getTotalBenefit());

    OutputView.printExpectedPurchase(
      this.#anOrder.getTotalPrice() - this.#aBenefitList.getDiscountPrice(),
    );
    OutputView.printEventBadge(this.#aBenefitList.getBadge());
  }
}

export default BenefitController;
