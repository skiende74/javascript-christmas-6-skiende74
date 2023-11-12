import Errors from './constants/Errors.js';
import Conditions from './constants/Conditions.js';

const Validation = {
  validateVisitDate(visitDate) {
    const date = Number(visitDate);
    if (!(Number.isInteger(date) && date <= 31 && date >= 1))
      throw new Error(Errors.VISIT_DATE_RANGE);
  },

  validateOrderFormat(orderStr) {
    if (
      !orderStr
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

  validateOrderMustInMenu(order) {
    const menus = Object.values(Conditions.MENUS_PRICES).flatMap((el) =>
      Object.keys(el),
    );
    if (!order.split(',').every((menu) => menus.includes(menu.split('-')[0])))
      throw new Error(Errors.ORDER_FORMAT);
  },

  validateOrderCountOneOrMore(order) {
    if (!order.split(',').every((menu) => menu.split('-')[1] >= 1))
      throw new Error(Errors.ORDER_FORMAT);
  },

  validateOrderNoRedundant(order) {
    const menus = order.split(',').map((menu) => menu.split('-')[0]);
    if (menus.length !== new Set(menus).size)
      throw new Error(Errors.ORDER_FORMAT);
  },

  validateOrderNoOnlyBeverage(order) {
    const beverages = Object.keys(Conditions.MENUS_PRICES.beverages);
    if (
      order.split(',').every((menu) => beverages.includes(menu.split('-')[0]))
    )
      throw new Error(Errors.ORDER_FORMAT);
  },

  validateOrderNotOverTwenty(order) {
    const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);
    if (sum(order.split(',').map((o) => Number(o.split('-')[1]))) > 20)
      throw new Error(Errors.ORDER_FORMAT);
  },
};

export default Validation;
