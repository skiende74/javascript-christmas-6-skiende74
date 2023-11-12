import PresentEvent from '../src/models/PresentEvent';

describe('증정 이벤트', () => {
  test.each([10000, 10001, 9000000])('증정', (totalPrice) => {
    expect(new PresentEvent(totalPrice).isGiven()).toTruthy();
  });
  test.each([100, 9999, 7000])('증정', (totalPrice) => {
    expect(new PresentEvent(totalPrice).isGiven()).toFalsy();
  });
});
