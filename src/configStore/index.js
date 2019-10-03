/* eslint-disable no-underscore-dangle */
import { compose, createStore } from 'redux';

import rootReducer from '../reducers';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => {
        return f;
      },
);

const store = createStore(rootReducer, enhancers);

export default store;
