import Discounter from '../src/models/Discounter';
import VisitDate from '../src/models/VisitDate';

// eslint-disable-next-line max-lines-per-function
describe('할인', () => {
  test.each([
    ['3', 1200],
    ['7', 1600],
    ['25', 3400],
    ['26', 0],
  ])('D-Day 할인', (date, expectedDiscount) => {
    // when
    const discount = new Discounter(new VisitDate(date)).getDiscounts().dday;
    // then
    expect(discount).toBe(expectedDiscount);
  });

  test.each([
    ['2', 0],
    ['3', 2023],
    ['7', 2023],
    ['9', 0],
  ])('평일 할인', (date, expectedDiscount) => {
    // when
    const discount = new Discounter(new VisitDate(date)).getDiscounts().weekday;
    // then
    expect(discount).toBe(expectedDiscount);
  });

  test.each([
    ['1', 2023],
    ['2', 2023],
    ['8', 2023],
    ['10', 0],
  ])('주말 할인', (date, expectedDiscount) => {
    // when
    const discount = new Discounter(new VisitDate(date)).getDiscounts().weekend;
    // then
    expect(discount).toBe(expectedDiscount);
  });

  test.each([
    ['3', 1000],
    ['10', 1000],
    ['25', 1000],
    ['23', 0],
  ])('특별 할인', (date, expectedDiscount) => {
    // when
    const discount = new Discounter(new VisitDate(date)).getDiscounts().special;
    // then
    expect(discount).toBe(expectedDiscount);
  });
});
