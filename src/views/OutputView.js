import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

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
  printBenfitList() {
    Console.print(Messages.HEADERS.BENEFIT_LIST);
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
