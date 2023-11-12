import Errors from './constants/Errors';

const Validation = {
  validateVisitDate(visitDate) {
    if (!(Number.isInteger(visitDate) && visitDate <= 31 && visitDate >= 1))
      throw new Error(Errors.VISIT_DATE_RANGE);
  },
};

export default Validation;
