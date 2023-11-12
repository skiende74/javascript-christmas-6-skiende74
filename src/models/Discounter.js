import Conditions from '../constants/Conditions.js';

class Discounter {
  #dday = 0;

  #weekday = 0;

  #weekend = 0;

  #special = 0;

  constructor(date) {
    this.#dday = (date <= 25) * (date + 9) * Conditions.DISCOUNTS.dday;
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

  #getDayOfWeek(date) {
    return new Date(`2023-12-${date}`).getDay();
  }
}

export default Discounter;
