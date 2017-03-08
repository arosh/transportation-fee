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
  twoWayDiscount: {
    use: false,
    rules: [false, false],
  },
  studentDiscount: {
    use: false,
  },
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
      const twoWay = !state.buyTwoWayTicket;
      let discount = state.twoWayDiscount.use;
      if (!twoWay) {
        discount = false;
      }
      return Object.assign({}, state, {
        buyTwoWayTicket: twoWay,
        twoWayDiscount: Object.assign({}, state.twoWayDiscount, {
          use: discount,
        }),
      });
    }
    case 'toggle/useTwoWayDiscount': {
      const o = Object.assign({}, state);
      o.twoWayDiscount.use = !state.twoWayDiscount.use;
      return o;
    }
    case 'toggle/twoWayDiscountRules': {
      const { index } = state;
      const oldRules = state.twoWayDiscount.rules;
      const newRules = [
        ...oldRules.slice(0, index),
        !oldRules[index],
        ...oldRules.slice(index + 1)];
      return Object.assign({}, state, {
        twoWayDiscount: {
          rules: newRules,
        },
      });
    }
    case 'toggle/useStudentDiscount': {
      return Object.assign({}, state, {
        studentDiscount: {
          use: !state.studentDiscount.use,
        },
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
