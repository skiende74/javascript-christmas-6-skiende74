const Messages = Object.freeze({
  GREETING: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  VISIT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  INPUT_ORDER:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',

  HEADERS: {
    ORDER_MENU: '\n<주문 메뉴>',
    TOTAL_PRICE_BEFORE_DISCOUNT: '\n<할인 전 총주문 금액>',
    PRESENT_EVENT: '\n<증정 메뉴>',
    BENEFIT_LIST: '\n<혜택 내역>',
    TOTAL_BENEFIT_PRICE: '\n<총혜택 금액>',
    EXPECTED_PURCHASE_AFTER_DISCOUNT: '\n<할인 후 예상 결제 금액>',
    EVENT_BADGE: '\n<12월 이벤트 배지>',
  },
  PRESENT_EVENT_PRIZE: '샴페인 1개',

  SPLITTER: '```',

  DISCOUNTS: {
    dday: '크리스마스 디데이 할인',
    weekday: '평일 할인',
    weekend: '주말 할인',
    special: '특별 할인',
  },
  PRESENT_EVENT: '증정 이벤트',
});

export default Messages;
