import Discounter from '../src/models/Discounter';

describe('할인', () => {
  test.each([
    [3, 1200],
    [7, 1600],
    [25, 3400],
    [26, 0],
  ])('D-Day 할인', (date, expectedDiscount) => {
    // when
    const discount = new Discounter(date).getDiscounts().dday;
    // then
    expect(discount).toBe(expectedDiscount);
  });
});
