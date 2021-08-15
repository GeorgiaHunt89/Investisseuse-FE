import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import { capitalize } from '@material-ui/core/utils';

const styles = (theme) => ({
  root: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    minWidth: theme.spacing(6),
    backgroundColor: theme.palette.common.white,
    '&$disabled': {
      backgroundColor: theme.palette.divider,
    },
  },
  inputBorder: {
    border: '1px solid #deba54',
    '&:focus': {
      borderColor: theme.palette.secondary.main,
    },
  },
  disabled: {},
  inputSizeSmall: {
    fontSize: 12,
    padding: theme.spacing(1),
    width: `calc(100% -${theme.spacing(2)}px)`,
  },
  inputSizeMedium: {
    fontSize: 14,
    padding: theme.spacing(2),
    width: `calc(100% -${theme.spacing(4)}px)`,
  },
  inputSizeLarge: {
    fontSize: 14,
    padding: 22,
    width: `calc(100% -${22 * 2}px)`,
  },
  formLabel: {
    fontSize: 14,
  },
  select: {
    height: 'auto',
    borderRadius: 0,
  },
  selectIcon: {
    top: '50%',
    marginTop: -12,
  },
});

function TextField(props) {
  const { classes, InputProps = {}, InputLabelProps, noBorder = false, size = 'medium', SelectProps, ...other } = props;

  const { classes: { input: InputPropsClassesInput, ...InputPropsClassesOther } = {}, ...InputPropsOther } = InputProps;

  return (
    <MuiTextField
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.root,
          input: clsx(
            classes.input,
            classes[`inputSize${capitalize(size)}`],
            {
              [classes.inputBorder]: !noBorder,
            },
            InputPropsClassesInput
          ),
          disabled: classes.disabled,
          ...InputPropsClassesOther,
        },
        ...InputPropsOther,
      }}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        className: classes.formLabel,
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: classes.select,
          icon: classes.selectIcon,
        },
      }}
      {...other}
    />
  );
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  InputLabelProps: PropTypes.object,
  InputProps: PropTypes.object,
  noBorder: PropTypes.bool,
  SelectProps: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default withStyles(styles)(TextField);
