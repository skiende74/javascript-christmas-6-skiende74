import PresentEvent from '../src/services/PresentEvent';

describe('증정 이벤트', () => {
  test.each([10000, 10001, 9000000])('증정', (totalPrice) => {
    expect(new PresentEvent(totalPrice).isGiven()).toBeTruthy();
  });
  test.each([100, 9999, 7000])('증정 안함', (totalPrice) => {
    expect(new PresentEvent(totalPrice).isGiven()).toBeFalsy();
  });
});
