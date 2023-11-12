import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages';

const OutputView = {
  printMenu() {
    Console.print(Messages.ORDER_MENU);
  },
  printPriceBeforeDiscount() {
    Console.print(Messages.TOTAL_PRICE_BEFORE_DISCOUNT);
  },
  printBenfitList() {
    Console.print(Messages.BENEFIT_LIST);
  },
  printBenfitPrice() {
    Console.print(Messages.TOTAL_BENEFIT_PRICE);
  },
  printExpectedPurchase() {
    Console.print(Messages.EXPECTED_PURCHASE_AFTER_DISCOUNT);
  },

  print(message) {
    Console.print(message);
  },
  // ...
};

export default OutputView;
