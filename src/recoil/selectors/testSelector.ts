import {selector} from 'recoil';
import { ctnStates } from '../atoms/ctnStates';

export const doubleSum = selector({
  key: 'doubleSum',
  get: ({get}) => {
    const sum = get(ctnStates);
    return sum + 2;
  },
  set: ({set}, newValue) => {
    set(ctnStates, Number(newValue) - 2);
  }
})