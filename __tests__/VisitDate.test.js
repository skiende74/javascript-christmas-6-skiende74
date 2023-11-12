import VisitDate from '../src/models/VisitDate';

describe('방문일', () => {
  test.each([1, 5, 20, 30, 31])('올바른 입력', (visitDate) => {
    expect(() => new VisitDate(visitDate)).not.toThrow();
  });

  test.each([-20, 0, 32, 100])('범위 초과', (date) => {
    expect(() => new VisitDate(date)).toThrow('[ERROR]');
  });

  test.each([1.1, 2.4])('float 입력', (date) => {
    expect(() => new VisitDate(date)).toThrow('[ERROR]');
  });
});
