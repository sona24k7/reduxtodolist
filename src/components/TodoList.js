import React from 'react';
import Todo from './Todo';
import "../containers/style.css"

const TodoList = ({ todos, toggleTodo }) => (
  <ul className="todolist">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;