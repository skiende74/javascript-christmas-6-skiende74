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

  validateOrderNotOverTwenty(order) {},
};

export default Validation;
