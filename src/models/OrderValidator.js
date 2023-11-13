import Errors from '../constants/Errors.js';
class VisitDateValidator {
  #date;

  constructor(date) {
    this.#date = date;
  }

  validate() {
    const date = Number(this.#date);
    if (!(Number.isInteger(date) && date <= 31 && date >= 1))
      throw new Error(Errors.VISIT_DATE_RANGE);
  }
}

export default VisitDateValidator;
