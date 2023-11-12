import BenefitList from '../src/models/BenefitList';
import Conditions from '../src/constants/Conditions';

describe('혜택 내역', () => {
  beforeEach(() => {
    const givenPrice = Conditions.MENUS_PRICES.beverages['샴페인'];
  });
  test.each([
    [
      {
        dday: 1100,
        weekday: 0,
        weekend: 2023,
        special: 1000,
      },
      true,
      4123 + givenPrice,
    ],
    [
      {
        dday: 1300,
        weekday: 2023,
        weekend: 0,
        special: 1000,
      },
      false,
      4323,
    ],
  ])('총 혜택 금액', (discounts, isGiven, benefit) => {
    expect(new BenefitList(discounts, isGiven).getTotalBenefit()).teBe(benefit);
  });

  test.each([
    [
      {
        dday: 1100,
        weekday: 0,
        weekend: 0,
        special: 1000,
      },
      false,
      '없음',
    ],
    [
      {
        dday: 3000,
        weekday: 2023,
        weekend: 0,
        special: 1000,
      },
      false,
      '별',
    ],
    [
      {
        dday: 1300,
        weekday: 2023,
        weekend: 0,
        special: 1000,
      },
      true,
      '산타',
    ],
  ])('배지 부여', (discounts, isGiven, badge) => {
    expect(new BenefitList(discounts, isGiven).getBadge()).teBe(badge);
  });
});
