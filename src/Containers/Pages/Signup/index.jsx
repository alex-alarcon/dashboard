import PropTypes from 'prop-types';
import { CancelToken } from 'axios';
import React, { useCallback } from 'react';

import API from '../../../API';

import UserForm from '../../../Components/UserForm';

function Signup({ history }) {
  const sourceRef = React.useRef();

  React.useEffect(() => {
    return () => {
      sourceRef.current.cancel('Me fui!!!');
    };
  }, []);

  const signUp = useCallback(
    async data => {
      sourceRef.current = CancelToken.source();

      const res = await API.signUp(data, {
        cancelToken: sourceRef.current.token,
      });

      localStorage.setItem('user', JSON.stringify(res.user));
      history.push('/home');
    },
    [history],
  );

  return <UserForm onSubmit={signUp} />;
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Signup;
