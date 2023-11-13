import Validation from '../Validation.js';
import Conditions from '../constants/Conditions.js';
import VisitDateValidator from './VisitDateValidator.js';

class VisitDate {
  #date;

  constructor(date) {
    new VisitDateValidator(date).validate();
    this.#date = Number(date);
    //this.#validate();
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

  #validate() {
    Validation.validateVisitDate(this.#date);
  }
}

export default VisitDate;
