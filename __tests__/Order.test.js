import Order from '../src/models/Order';

describe('주문', () => {
  test.each(['시저샐러드-1', '시저샐러드-1,티본스테이크-2,바비큐립-1'])(
    '올바른 입력',
    (order) => {
      expect(() => new Order(order)).not.toThrow();
    },
  );
});
