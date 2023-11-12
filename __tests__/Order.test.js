import Order from '../src/models/Order';

// eslint-disable-next-line max-lines-per-function
describe('주문', () => {
  test.each(['티본스테이크-1', '샴페인-1,제로콜라-2,바비큐립-1'])(
    '올바른 입력',
    (order) => {
      expect(() => new Order(order)).not.toThrow();
    },
  );

  test.each(['감자-1', '시저샐러드-2,튤립-1'])('없는 메뉴 입력', (order) => {
    expect(() => new Order(order)).toThrow('[ERROR]');
  });

  test.each(['티본스테이크-0'])('잘못된 갯수 입력', (order) => {
    expect(() => new Order(order)).toThrow('[ERROR]');
  });

  test.each(['샴페인-1,샴페인-2', '샴페인-1,레드와인-2,샴페인-2'])(
    '중복메뉴 입력',
    (order) => {
      expect(() => new Order(order)).toThrow('[ERROR]');
    },
  );

  test.each(['샴페인-1,레드와인-2', '샴페인-4'])('음료만 주문불가', (order) => {
    expect(() => new Order(order)).toThrow('[ERROR]');
  });
});
