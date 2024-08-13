import React, { useState } from 'react';
import { useFetchTodos } from '../hooks';
import { Todo } from '../types';

const TodoList: React.FC = () => {
  const [fetchTodosTrigger, setFetchTodosTrigger] = useState(false);
  const { todos, loading } = useFetchTodos(fetchTodosTrigger);

  if (loading === 'loading') {
    return <div>Loading...</div>;
  }

  const handleFetchTodosClick = () => {
    setFetchTodosTrigger(!fetchTodosTrigger); // Toggle the trigger to fetch todos
  };

  return (
    <div className="text-center w-full h-full">
        <button className="bg-black text-white px-4 py-2 rounded text-center" onClick={handleFetchTodosClick}>
          Fetch Todos
        </button>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>{todo.title}</li> // Ensure 'id' and 'title' match the actual properties of your todo objects
      ))}
    </div>
  );
};

export default TodoList;
