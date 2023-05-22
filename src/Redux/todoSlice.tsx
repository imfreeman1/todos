import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Todo {
	id: string;
	content: string;
}

type State = Todo[];

const todoInitState: State = [];

export const todoSlice = createSlice({
	name: 'todo',
	initialState: todoInitState,
	reducers: {
		setTodo: (state, { payload }: PayloadAction<Todo>): State => {
			state = [...state, payload];
			return state;
		},
	},
});

const todoReducer = todoSlice.reducer;

export { todoReducer };
