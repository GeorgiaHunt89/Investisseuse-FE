import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../form/TextField';

function InputTextField(props) {
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <TextField
      error={Boolean(touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={touched ? error || submitError : ''}
    />
  );
}

InputTextField.propTypes = {
  autoComplete: PropTypes.string,
  input: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default InputTextField;
