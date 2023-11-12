import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';
import Conditions from '../constants/Conditions.js';

const OutputView = {
  printMenu() {
    Console.print(Messages.HEADERS.ORDER_MENU);
  },
  printPriceBeforeDiscount() {
    Console.print(Messages.HEADERS.TOTAL_PRICE_BEFORE_DISCOUNT);
  },
  printPresentEvent(isGiven) {
    Console.print(Messages.HEADERS.PRESENT_EVENT);
    Console.print(isGiven ? Messages.PRESENT_EVENT_PRIZE : '없음');
  },
  printBenfitList(discounts, isGiven) {
    Console.print(Messages.HEADERS.BENEFIT_LIST);

    const format = (discount) =>
      new Intl.NumberFormat('ko-KR').format(discount);

    Object.entries(discounts).map(([menu, discount]) => {
      Console.print(`${Messages.DISCOUNTS[menu]}: -${format(discount)}원`);
    });

    if (isGiven) {
      const prize = Conditions.PRESENT_EVENT_PRIZE;
      const prizePrice = Conditions.MENUS_PRICES[prize];
      Console.print(`${Messages.PRESENT_EVENT}: -${format(prizePrice)}원`);
    }
  },

  printBenfitPrice() {
    Console.print(Messages.HEADERS.TOTAL_BENEFIT_PRICE);
  },
  printExpectedPurchase() {
    Console.print(Messages.HEADERS.EXPECTED_PURCHASE_AFTER_DISCOUNT);
  },

  print(message) {
    Console.print(message);
  },

  printSplitter() {
    Console.print(Messages.SPLITTER);
  },

  printGreeting() {
    Console.print(Messages.GREETING);
  },

  // ...
};

export default OutputView;
