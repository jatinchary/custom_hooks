// src/features/todoSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Todo, TodosState } from '../../types';

// Async thunk to fetch todos
export const fetchTodos = createAsyncThunk<Todo[], void>(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
    
    return data;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: { entities: [], loading: 'idle' } as TodosState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = 'idle';
      });
  },
});

export default todoSlice.reducer;
