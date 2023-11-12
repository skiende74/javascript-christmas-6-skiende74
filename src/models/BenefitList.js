import Conditions from '../constants/Conditions';
class BenefitList {
  #discounts;
  #isGivenPresent;

  constructor(discounts, isGivenPresent) {
    this.#discounts = discounts;
    this.#isGivenPresent = isGivenPresent;
  }

  getTotalBenefit() {
    return this.#calcDiscountPrice() + this.#calcGivenPrice();
  }

  getTotalDiscountPrice() {
    return this.#calcDiscountPrice();
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

  #calcDiscountPrice() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);

    return sum(Object.values(this.#discounts));
  }
}

export default BenefitList;
