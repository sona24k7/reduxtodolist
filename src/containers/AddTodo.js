import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="container-fluid">
      <div><h1 className="head bg-primary">WELCOME TO MY TODO APP</h1></div>
      <div className="headings">

        <h4>PLEASE ENTER A TASK BELOW</h4>
      </div>
      <form className=" fstyle form-inline "
        onSubmit={
          e => {
            e.preventDefault();

            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value));
            input.value = '';
          }
        }
      >
        <input className="textbox" type="text" ref={el => (input = el)} />
        <button className="btn btn-primary" type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);