// src/app/hooks.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer, RootState } from './rootReducer'; // Adjust the import path as necessary

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
