import Conditions from '../constants/Conditions';
class BenefitList {
  #discounts;
  #isGivenPresent;

  constructor(discounts, isGivenPresent) {
    this.#discounts = discounts;
    this.#isGivenPresent = isGivenPresent;
  }

  getTotalBenefit() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);

    const discountPrice = sum(Object.values(this.#discounts));
    const givenPrice = this.#calcGivenPrice();
    return discountPrice + givenPrice;
  }
  getBadge() {
    const total = this.getTotalBenefit();
    if (total >= 20000) return '산타';
    if (total >= 10000) return '트리';
    if (total >= 5000) return '별';
    return '없음';
  }

  #calcGivenPrice() {
    return this.#isGivenPresent ? Conditions.MENUS_PRICES.beverages.샴페인 : 0;
  }
}

export default BenefitList;
