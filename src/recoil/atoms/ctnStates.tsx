import { atom } from 'recoil';

const initialStates = 0;

export const ctnStates = atom<number>({
	key: 'ctnStates',
	default: initialStates,
});
