import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// to do type 정의
export interface TodoItem {
  id: number;
  text: string;
}

// 초기 상태 정의
interface TodosState {
  todos: TodoItem[];
}
const initialState: TodosState = {
  todos: []
};

// Slice 생성
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>){
      const newTodo: TodoItem = {
        id: Date.now(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo(state, action: PayloadAction<number>){
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
})

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;