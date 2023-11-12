import Validation from '../Validation';

class VisitDate {
  #date;

  constructor(date) {
    this.#date = date;
    VisitDate.#validate(date);
  }

  static #validate(date) {
    Validation.validateVisitDate(date);
  }
}

export default VisitDate;
