import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/features/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // Add other reducers here
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch