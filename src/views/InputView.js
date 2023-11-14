/* eslint-disable no-await-in-loop */
/* eslint-disable no-constant-condition */
import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';
import VisitDate from '../domains/VisitDate.js';
import Order from '../domains/Order.js';
import OutputView from './OutputView.js';

const Private = {
  async readDate() {
    return Console.readLineAsync(`${Messages.VISIT_DATE}\n`);
  },
  async readOrder() {
    return Console.readLineAsync(`${Messages.INPUT_ORDER}\n`);
  },

  async robustInput(readline, Object) {
    while (true) {
      try {
        const input = await readline();
        return new Object(input);
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  },
};

const InputView = {
  async readVisitDate() {
    return Private.robustInput(Private.readDate, VisitDate);
  },

  async readOrder() {
    return Private.robustInput(Private.readOrder, Order);
  },
};

export default InputView;
