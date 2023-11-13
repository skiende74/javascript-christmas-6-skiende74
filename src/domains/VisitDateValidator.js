import Errors from '../constants/Errors.js';

class VisitDateValidator {
  #date;

  constructor(dateStr) {
    this.#date = Number(dateStr);
  }

  validate() {
    if (!(Number.isInteger(this.#date) && this.#isInRange()))
      throw new Error(Errors.VISIT_DATE_RANGE);
  }

  #isInRange() {
    return this.#date <= 31 && this.#date >= 1;
  }
}

export default VisitDateValidator;
