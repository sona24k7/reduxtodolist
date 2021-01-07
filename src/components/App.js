import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />

  </div>
);

export default App;