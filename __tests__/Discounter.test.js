import Discounter from '../src/models/Discounter';

describe('할인', () => {
  test.each([
    [3, 1200],
    [7, 1600],
    [25, 3400],
    [26, 0],
  ])('D-Day 할인', (condition) => {
    // given
    const date = condition[0];
    const expectedDiscount = condition[1];

    const discount = new Discounter(date).getDiscounts.dday;
    expect(() => discount).toBe(expectedDiscount);
  });
});
