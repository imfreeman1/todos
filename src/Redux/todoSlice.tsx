import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Todo {
	id: string;
	content: string;
}

type State = Todo[];

interface InitState {
	TodoTask : State;
	CompleteTask : State;
}
const todoInitState: InitState = {
	TodoTask: [],
	CompleteTask: []
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState: todoInitState,
	reducers: {
		setTodo: (state, { payload }: PayloadAction<Todo>): InitState => {
			state.TodoTask = [...state.TodoTask, payload];
			return state;
		},
		removeTodo: (state, { payload }: PayloadAction<Todo>): InitState => {
			console.log(payload);
			state.TodoTask = state.TodoTask.filter(({ id }) => {
				id !== payload.id;
			});
			return state;
		},
	},
});

const todoReducer = todoSlice.reducer;

export { todoReducer };
