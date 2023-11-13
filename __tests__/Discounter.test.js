import Discounter from '../src/models/Discounter';
import VisitDate from '../src/models/VisitDate';
import Order from '../src/models/Order';

// eslint-disable-next-line max-lines-per-function
describe('할인', () => {
  test.each([
    ['3', '티본스테이크-1', 1200],
    ['25', '티본스테이크-1', 3400],
    ['26', '티본스테이크-1', 0], // 25일 초과
  ])('D-Day 할인', (date, orderStr, expectedDiscount) => {
    // given
    const aDiscounter = new Discounter(
      new VisitDate(date),
      new Order(orderStr),
    );
    // when
    const discount = aDiscounter.getDiscounts().dday;
    // then
    expect(discount).toBe(expectedDiscount);
  });

  test.each([
    ['3', '초코케이크-1', 2023],
    ['3', '아이스크림-3', 2023 * 3],
    ['2', '초코케이크-1', 0], // 평일아님
    ['2', '티본스테이크-1', 0], // 디저트아님
  ])('평일 할인', (date, orderStr, expectedDiscount) => {
    // given
    const aDiscounter = new Discounter(
      new VisitDate(date),
      new Order(orderStr),
    );
    // when
    const discount = aDiscounter.getDiscounts().weekday;
    // then
    expect(discount).toBe(expectedDiscount);
  });

  test.each([
    ['1', '티본스테이크-1', 2023],
    ['2', '티본스테이크-3', 2023 * 3],
    ['3', '티본스테이크-1', 0], // 주말아님
    ['1', '초코케이크-1', 0], // 메인메뉴아님
  ])('주말 할인', (date, orderStr, expectedDiscount) => {
    // given
    const aDiscounter = new Discounter(
      new VisitDate(date),
      new Order(orderStr),
    );
    // when
    const discount = aDiscounter.getDiscounts().weekend;
    // then
    expect(discount).toBe(expectedDiscount);
  });

  test.each([
    ['3', '티본스테이크-1', 1000],
    ['10', '티본스테이크-1', 1000],
    ['25', '티본스테이크-1', 1000],
    ['23', '티본스테이크-1', 0],
  ])('특별 할인', (date, orderStr, expectedDiscount) => {
    // given
    const aDiscounter = new Discounter(
      new VisitDate(date),
      new Order(orderStr),
    );
    // when
    const discount = aDiscounter.getDiscounts().special;
    // then
    expect(discount).toBe(expectedDiscount);
  });
});
