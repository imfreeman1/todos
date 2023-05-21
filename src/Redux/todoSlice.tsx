import { createSlice } from '@reduxjs/toolkit';

interface Todo {
	id: number;
	content: string;
}

type State = Todo[];

export const todoSlice = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		setTodo: (state: State, action) => {
			state = [...state, action.payload];
		},
	},
});

const todoReducer = todoSlice.reducer;

export { todoReducer };
