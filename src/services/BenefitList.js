import Conditions from '../constants/Conditions.js';

class BenefitList {
  #discounts;

  #isGivenPresent;

  constructor(discounts, isGivenPresent) {
    this.#discounts = discounts;
    this.#isGivenPresent = isGivenPresent;
  }

  getTotalBenefit() {
    return this.getDiscountPrice() + this.getPresentPrice();
  }

  getBadge() {
    const total = this.getTotalBenefit();
    if (total >= 20000) return '산타';
    if (total >= 10000) return '트리';
    if (total >= 5000) return '별';
    return '없음';
  }

  getPresentPrice() {
    return this.#isGivenPresent
      ? Conditions.MENUS_PRICES.beverages[Conditions.PRESENT_EVENT_MENU]
      : 0;
  }

  isZeroBenefit() {
    return this.getTotalBenefit() === 0;
  }

  getDiscountPrice() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);

    return sum(Object.values(this.#discounts));
  }

  getDiscounts() {
    return this.#discounts;
  }
}

export default BenefitList;
