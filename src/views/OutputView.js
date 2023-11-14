import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

const Utils = {
  printDiscountPrice(discounts) {
    Object.entries(discounts)
      .filter(([, discount]) => discount > 0)
      .forEach(([menu, discount]) => {
        Console.print(
          `${Messages.DISCOUNTS[menu]}: -${this.format(discount)}원`,
        );
      });
  },

  printPresentPriceIfExist(presentPrice) {
    if (presentPrice > 0) {
      Console.print(
        `${Messages.PRESENT_EVENT}: -${this.format(presentPrice)}원`,
      );
    }
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
    Console.print(`${Utils.format(price)}원`);
  },

  printPresentEvent(isGiven) {
    Console.print(Messages.HEADERS.presentEvent);
    Console.print(isGiven ? Messages.PRESENT_EVENT_PRIZE : '없음');
  },

  printBenefitList(aBenefitList) {
    Console.print(Messages.HEADERS.benefitList);
    if (aBenefitList.isZeroBenefit()) {
      Console.print('없음');
      return;
    }
    Utils.printDiscountPrice(aBenefitList.getDiscounts());
    Utils.printPresentPriceIfExist(aBenefitList.getPresentPrice());
  },

  printBenefitPrice(benefitPrice) {
    Console.print(Messages.HEADERS.totalBenefitPrice);
    Console.print(
      `${benefitPrice > 0 ? `-${Utils.format(benefitPrice)}` : 0}원`,
    );
  },

  printExpectedPurchase(price) {
    Console.print(Messages.HEADERS.expectedPurchaseAfterDiscount);
    Console.print(`${Utils.format(price)}원`);
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
