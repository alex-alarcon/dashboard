import PropTypes from 'prop-types';
import { CancelToken } from 'axios';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';

import { signUp } from '../../../actions';

import UserForm from '../../../Components/UserForm';

function Signup({ history }) {
  const sourceRef = React.useRef();
  const dispatch = useDispatch();
  React.useEffect(() => {
    return () => {
      sourceRef.current.cancel('Me fui!!!');
    };
  }, []);

  const register = useCallback(
    async data => {
      sourceRef.current = CancelToken.source();

      await dispatch(
        signUp(
          data,
          {
            cancelToken: sourceRef.current.token,
          },
          history,
        ),
      );
    },
    [dispatch, history],
  );

  return <UserForm onSubmit={register} />;
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Signup;
