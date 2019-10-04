/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => {
        return f;
      },
);

const store = createStore(rootReducer, enhancers);

export default store;
