import { atom } from 'recoil';
import { TODO } from 'src/Interface/todoInterface';

const initStates: TODO[] = [];
export const todoStates = atom({
	key: 'todoStates',
	default: initStates,
});
