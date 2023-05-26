import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TODO, Todo } from 'src/Interface/todoInterface';

// 내가 완료한 Todo를 complete로 옮겨서 랜더링 해주고 싶다. 그러니까 배열 두개로 보여주고 싶다.
// 체크박스가 체크 되면 todotask에서

const todoInitState: { TodoTask: TODO[] } = {
	TodoTask: [],
};
// Slice<State, CaseReducers, Name>;

export const todoSlice = createSlice({
	name: 'todo',
	initialState: todoInitState,
	reducers: {
		setTodo: (state, { payload }: PayloadAction<TODO>): void => {
			state.TodoTask = [...state.TodoTask, payload];
		},
		removeTodo: (state, { payload }: PayloadAction<TODO[Todo.id]>): void => {
			state.TodoTask = state.TodoTask.filter(({ id }) => {
				id !== payload;
			});
		},
	},
});

const todoReducer = todoSlice.reducer;

export { todoReducer };
