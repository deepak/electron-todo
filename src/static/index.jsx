import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import todoApp from '../react-app/reducers';
import App from '../react-app/components/App.jsx';
import About from '../react-app/components/About.jsx';
import { dispatchTodos, addTodo } from '../react-app/actions';

const initialState = {};
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(
  todoApp,
  initialState,
  enhancers
);

// called only once,
// before application initially starts to render react-route and any of its related DOM elements
function onAppInit(dispatch) {
  return (nextState, replace, callback) => {
    dispatch(dispatchTodos())
      .then((todos) => {
        todos.data.map(t => dispatch(addTodo(t.title)));
        // callback is like a "next" function, app initialization is stopped until it is called.
        callback();
      });
  };
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/about" component={About}/>
      <Route path="/" component={App} onEnter={onAppInit(store.dispatch)}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
