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
  useStudentDiscount: false,
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
    case 'toggle/buyTwoWayTicket': {
      return Object.assign({}, state, {
        buyTwoWayTicket: !state.buyTwoWayTicket,
      });
    }
    case 'toggle/useStudentDiscount': {
      return Object.assign({}, state, {
        useStudentDiscount: !state.useStudentDiscount,
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
