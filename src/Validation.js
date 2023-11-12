import Errors from './constants/Errors';

const Validation = {
  validateVisitDate(visitDate) {
    if (!(Number.isInteger(visitDate) && visitDate <= 31 && visitDate >= 1))
      throw new Error(Errors.VISIT_DATE_RANGE);
  },

  validateOrderFormat(order) {
    if (
      !order
        .split(',')
        .every(
          (menu) =>
            menu.includes('-') &&
            !Number.isInteger(Number(menu.split('-')[0])) &&
            Number.isInteger(Number(menu.split('-')[1])),
        )
    )
      throw new Error(Errors.ORDER_FORMAT);
  },
};

export default Validation;