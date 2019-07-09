import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// DELETE, FOR TESTING ONLY
import { fetchTodos } from './actions/todo_actions';
window.fetchTodos = fetchTodos;

document.addEventListener('DOMContentLoaded', () => {
  // const preloadedState = localStorage.state ?
  //   JSON.parse(localStorage.state) : {};
  let store = configureStore(/*preloadedState*/);
  
// DELETE, FOR TESTING ONLY
window.store = store;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
