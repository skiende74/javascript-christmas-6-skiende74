import Conditions from '../constants/Conditions';

class PresentEvent {
  #totalPrice;
  constructor(totalPrice) {
    this.#totalPrice = totalPrice;
  }

  isGiven() {
    return this.#totalPrice >= Conditions.GIVEN_EVENT_MONEY_THRESHOLD;
  }
}

export default PresentEvent;
