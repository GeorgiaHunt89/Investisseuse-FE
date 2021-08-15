import React from 'react';
import PropTypes from 'prop-types';

// Importing @material-ui/ components
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { borderRadius } from '@material-ui/system';

export const styles = (theme) => ({
  root: {
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeMedium: {
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(15),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
});

export default Button;
