const Conditions = Object.freeze({
  MENUS_PRICES: {
    appetizers: { 양송이수프: 6000, 타파스: 5500, 시저샐러드: 8000 },
    main: {
      티본스테이크: 55000,
      바비큐립: 54000,
      해산물파스타: 35000,
      크리스마스파스타: 25000,
    },
    desserts: { 초코케이크: 15000, 아이스크림: 5000 },
    beverages: { 제로콜라: 3000, 레드와인: 60000, 샴페인: 25000 },
  },

  DISCOUNTS: {
    dday: 100,
    weekday: 2023,
    weekend: 2023,
    special: 1000,
  },

  SPECIAL_DATES: [3, 10, 17, 24, 25, 31],
});

export default Conditions;
