import Conditions from '../constants/Conditions.js';

class Discounter {
  #discounts = { dday: 0, weekday: 0, weekend: 0, special: 0 };
  #aDate;
  #anOrder;

  constructor(aDate, anOrder) {
    this.#aDate = aDate;
    this.#anOrder = anOrder;
    this.#discounts.dday = this.#getDdayDiscount();
    this.#discounts.weekday = this.#getWeekdayDiscount();
    this.#discounts.weekend = this.#getWeekendDiscount();
    this.#discounts.special = this.#getSpecialDiscount();
  }

  getDiscounts() {
    return this.#discounts;
  }

  getTotalDiscount() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);
    return sum(Object.values(this.getDiscounts()));
  }

  #getDdayDiscount() {
    if (!this.#aDate.isDdayApplicable()) return 0;
    return (this.#aDate.getDay() + 9) * Conditions.DISCOUNTS.dday;
  }

  #getWeekdayDiscount() {
    if (!this.#aDate.isWeekday()) return 0;
    return this.#anOrder.getNumberOfDesserts() * Conditions.DISCOUNTS.weekday;
  }

  #getWeekendDiscount() {
    if (!this.#aDate.isWeekend()) return 0;
    return this.#anOrder.getNumberOfMain() * Conditions.DISCOUNTS.weekend;
  }

  #getSpecialDiscount() {
    return this.#aDate.isSpecialDay() ? Conditions.DISCOUNTS.special : 0;
  }
}

export default Discounter;
