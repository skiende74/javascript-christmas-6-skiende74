import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';
import Conditions from '../constants/Conditions.js';

const OutputView = {
  printMenu(order) {
    Console.print(Messages.HEADERS.ORDER_MENU);
    Object.entries(order).map(([menu, count]) =>
      Console.print(`${menu} ${count}개`),
    );
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

    Object.entries(discounts)
      .filter(([menu, discount]) => discount > 0)
      .map(([menu, discount]) => {
        Console.print(
          `${Messages.DISCOUNTS[menu]}: -${this.format(discount)}원`,
        );
      });

    if (isGiven) {
      Console.print(`${Messages.PRESENT_EVENT}: -${this.format(25000)}원`);
    }
  },

  printBenfitPrice() {
    Console.print(Messages.HEADERS.TOTAL_BENEFIT_PRICE);
  },

  printExpectedPurchase() {
    Console.print(Messages.HEADERS.EXPECTED_PURCHASE_AFTER_DISCOUNT);
  },

  printEventBadge() {
    Console.print(Messages.HEADERS.EVENT_BADGE);
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

  format(discount) {
    return new Intl.NumberFormat('ko-KR').format(discount);
  },
  // ...
};

export default OutputView;
