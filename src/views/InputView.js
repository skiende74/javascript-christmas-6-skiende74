import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

const InputView = {
  async readDate() {
    return Console.readLineAsync(`${Messages.VISIT_DATE}\n`);
  },
};

export default InputView;
