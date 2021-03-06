import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={e => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          } else {
            dispatch(addTodo(input.value));
            input.value = '';
          }
        }}>
        <input
          ref={node => input = node }
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
