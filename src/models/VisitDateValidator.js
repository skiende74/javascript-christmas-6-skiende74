import Errors from '../constants/Errors.js';
class VisitDateValidator {
  #date;

  constructor(dateStr) {
    this.#date = Number(dateStr);
  }

  validate() {
    if (!(Number.isInteger(this.#date) && this.#date <= 31 && this.#date >= 1))
      throw new Error(Errors.VISIT_DATE_RANGE);
  }
}

export default VisitDateValidator;
