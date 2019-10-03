import { createActions } from 'redux-actions';

import API from '../API';

export const user = createActions(
  {
    SIGNUP: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
  {
    prefix: 'USER',
  },
);

export const signUp = (data, options = {}, history) => async dispatch => {
  dispatch(user.signup.request());

  try {
    const newUser = await API.signUp(data, options);
    dispatch(user.signup.success(newUser));
    history.push('/home');
  } catch (error) {
    dispatch(user.signup.failure(error));
  }
};
