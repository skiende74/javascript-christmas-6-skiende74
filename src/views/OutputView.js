import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

const Private = {
  printDiscountPrice(discounts) {
    Object.entries(discounts)
      .filter(([, discount]) => discount > 0)
      .forEach(([menu, discount]) => {
        Console.print(
          `${Messages.DISCOUNTS[menu]}: -${this.moneyFormat(discount)}`,
        );
      });
  },

  printPresentPriceIfExist(presentPrice) {
    if (presentPrice > 0) {
      Console.print(
        `${Messages.PRESENT_EVENT}: -${this.moneyFormat(presentPrice)}`,
      );
    }
  },

  moneyFormat(money) {
    return `${this.format(money) + Messages.CURRENCY}`;
  },

  format(discount) {
    return new Intl.NumberFormat('ko-KR').format(discount);
  },
};

const OutputView = {
  printMenu(order) {
    Console.print(Messages.HEADERS.orderMenu);
    Object.entries(order).map(([menu, count]) =>
      Console.print(`${menu} ${count}개`),
    );
  },

  printPriceBeforeDiscount(price) {
    Console.print(Messages.HEADERS.totalPriceBeforeDiscount);
    Console.print(Private.moneyFormat(price));
  },

  printPresentEvent(isGiven) {
    Console.print(Messages.HEADERS.presentEvent);
    Console.print(isGiven ? Messages.PRESENT_EVENT_PRIZE : Messages.EMPTY);
  },

  printBenefitList(aBenefitList) {
    Console.print(Messages.HEADERS.benefitList);
    if (aBenefitList.isZeroBenefit()) {
      Console.print(Messages.EMPTY);
      return;
    }
    Private.printDiscountPrice(aBenefitList.getDiscounts());
    Private.printPresentPriceIfExist(aBenefitList.getPresentPrice());
  },

  printBenefitPrice(benefitPrice) {
    Console.print(Messages.HEADERS.totalBenefitPrice);
    Console.print(Private.moneyFormat(benefitPrice > 0 ? -benefitPrice : 0));
  },

  printExpectedPurchase(price) {
    Console.print(Messages.HEADERS.expectedPurchaseAfterDiscount);
    Console.print(Private.moneyFormat(price));
  },

  printEventBadge(badge) {
    Console.print(Messages.HEADERS.eventBadge);
    Console.print(badge);
  },

  print(message) {
    Console.print(message);
  },

  printGreetings() {
    Console.print(Messages.GREETING);
  },
};

export default OutputView;
