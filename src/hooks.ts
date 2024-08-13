// // src/app/hooks.ts
// import { configureStore } from '@reduxjs/toolkit';
// // import { useEffect } from'react';
// import { useEffect } from 'react'; // Corrected line

// //  import { Provider } from 'react-redux';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import {rootReducer,  RootState } from './rootReducer';
// import { fetchTodos } from './redux/features/todoSlice';

// export const store = configureStore({
//   reducer: rootReducer,
// });

// export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useFetchTodos = (shouldFetch = false) => {
//   const dispatch = useAppDispatch();
//   const todos = useAppSelector((state) => state.todos.entities);
//   const loading = useAppSelector((state) => state.todos.loading);

//   useEffect(() => {
//     if (!loading && shouldFetch) {
//       dispatch(fetchTodos());
//     }
//   }, [dispatch, loading, shouldFetch]);

//   return { todos, loading };
// };


// src/hooks/useFetchTodos.ts
import { useEffect } from 'react';
import {Todo} from './types'
import { useAppDispatch, useAppSelector } from './hook2'; // Adjust the import path as necessary
import { fetchTodos } from './redux/features/todoSlice';

interface RootState {
  todos: {
    entities: Todo[];
    loading: 'idle' | 'loading' | 'failed';
  };
}

export const useFetchTodos = (shouldFetch = false) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state:RootState) => state.todos.entities);
  const loading = useAppSelector((state:RootState) => state.todos.loading);

  useEffect(() => {
    if (!loading && shouldFetch) {
      dispatch(fetchTodos());
    }
  }, [dispatch, loading, shouldFetch]);

  return { todos, loading };
};

