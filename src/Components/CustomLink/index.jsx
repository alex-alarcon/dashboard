import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const Link1 = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

function CustomLink({ path, text }) {
  return (
    <Link component={Link1} to={path} variant="body2">
      {text}
    </Link>
  );
}

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomLink;
