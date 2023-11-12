import Errors from './constants/Errors';
import Conditions from './constants/Conditions';

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

  validateOrderNotInMenu(order) {
    if (
      !order
        .split(',')
        .every((menu) =>
          Object.keys(Conditions.MENUS_PRICES).includes(menu.split('-')[0]),
        )
    )
      throw new Error(Errors.ORDER_FORMAT);
  },

  validateOrderCountOneOrMore(order) {
    if (!order.split(',').every((menu) => menu.split('-')[1] >= 1))
      throw new Error(Errors.ORDER_FORMAT);
  },
};

export default Validation;
