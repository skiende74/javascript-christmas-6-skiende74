import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },

  print(message) {
    Console.print(message);
  },
  // ...
};

export default OutputView;
