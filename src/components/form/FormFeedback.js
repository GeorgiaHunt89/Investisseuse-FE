import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withSyles } from '@material-ui/core/styles';
import Typography from '../typography/Typography';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  error: {
    backgroundColor: '#CC7D51',
    color: 'white',
  },
  success: {
    backgroundColor: '#CC7D51',
    color: 'white',
  },
});

function FormFeedback(props) {
  return (
    <div
      className={clsx(
        props.classes.root,
        { [props.classes.error]: props.error, [props.classes.success]: props.success },
        props.className
      )}
    >
      <Typography color="inherit">{props.children}</Typography>
    </div>
  );
}

FormFeedback.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default withStyles(styles)(FormFeedback);
