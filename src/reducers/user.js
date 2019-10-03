import { handleActions } from 'redux-actions';

import { user } from '../actions';

const reducer = handleActions(
  new Map([
    [
      user.signup.request,
      (state, { payload }) => ({
        ...state,
        isLoading: true,
      }),
    ],
    [
      user.signup.success,
      (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: payload,
      }),
    ],
    [
      user.signup.failure,
      (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }),
    ],
  ]),
  {
    isLoading: false,
    user: undefined,
    error: null,
  },
);

export default reducer;
