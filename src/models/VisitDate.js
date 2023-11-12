import Validation from '../Validation';
import Conditions from '../constants/Conditions.js';

class VisitDate {
  #date;

  constructor(date) {
    this.#date = date;
    VisitDate.#validate(date);
  }

  isDdayApplicable() {
    return this.#date <= 25;
  }

  isWeekday() {
    return this.#getDayOfWeek() <= 4;
  }

  isWeekend() {
    return this.#getDayOfWeek() >= 5;
  }

  isSpecialDay() {
    return Conditions.SPECIAL_DATES.includes(this.#date);
  }

  getDay() {
    return this.#date;
  }

  #getDayOfWeek() {
    return new Date(`2023-12-${this.#date}`).getDay();
  }

  static #validate(date) {
    Validation.validateVisitDate(date);
  }
}

export default VisitDate;
