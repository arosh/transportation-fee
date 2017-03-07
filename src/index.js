import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const initialState = {
  basic: 8750,
  express: 4870,
  buyTwoWayTicket: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'update/basic': {
      const value = Number.parseInt(action.value, 10);
      return Object.assign({}, state, {
        basic: value,
      });
    }
    case 'update/express': {
      const value = Number.parseInt(action.value, 10);
      return Object.assign({}, state, {
        express: value,
      });
    }
    case 'update/buyTwoWayTicket': {
      const value = action.value;
      return Object.assign({}, state, {
        buyTwoWayTicket: value,
      });
    }
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'));
