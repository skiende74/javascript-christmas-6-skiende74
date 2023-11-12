import Conditions from '../constants/Conditions.js';

class Discounter {
  #dday = 0;

  #weekday = 0;

  #weekend = 0;

  #special = 0;

  constructor(date) {
    this.#dday = date <= 25 ? (date + 9) * Conditions.DISCOUNTS.dday : 0;
    this.#weekday =
      Discounter.#getDayOfWeek(date) <= 4 ? Conditions.DISCOUNTS.weekday : 0;
    this.#weekend =
      Discounter.#getDayOfWeek(date) >= 5 ? Conditions.DISCOUNTS.weekend : 0;
    this.#special = Conditions.SPECIAL_DATES.includes(date)
      ? Conditions.DISCOUNTS.special
      : 0;
  }

  getDiscounts() {
    return {
      dday: this.#dday,
      weekday: this.#weekday,
      weekend: this.#weekend,
      special: this.#special,
    };
  }

  getTotalDiscount() {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);
    return sum(Object.values(this.getDiscounts()));
  }

  static #getDayOfWeek(date) {
    return new Date(`2023-12-${date}`).getDay();
  }
}

export default Discounter;
