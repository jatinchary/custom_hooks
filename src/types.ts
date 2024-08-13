// src/types.ts
export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface TodosState {
    entities: Todo[];
    loading: 'idle' | 'loading' | 'failed';
  }
  