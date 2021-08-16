import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// ----------------------------------------------------------------------

// Imports from Material Ui
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

// ----------------------------------------------------------------------

// Components for this page
import AppBar from '../navigation/AppBar';
import Toolbar, { styles as toolbarStyles } from '../navigation/Toolbar';

const styles = (theme) => ({
  text: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 0.1,
    display: 'flex',
  },
  leftLinkActive: {
    color: '#Deba54',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: '#2B3D5B',
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: '#Deba54',
  },
  logo: {
    display: 'flex',
    maxWidth: 150,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Montserrat',
    fontWeight: 300,
    color: '#Deba54',
    letterSpacing: '0.0075em',
    verticalAlign: 'middle',
    alignItems: 'center',
    textAlign: 'center',
  },
});

function NavBar(props) {
  const { classes } = props;

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar color="transparent" className={classes.toolbar}>
          <Box m={1} pt={10}>
            <img float mx="auto" pt={20} className={classes.logo} src={'/img/Investisseuse.png'} alt="Logo" />
          </Box>
          <div m={-1} className={classes.left} />
          <Link variant="heading" underline="none" color="inherit" className={classes.title} href="/">
            {'Investisseuse'}
          </Link>
          <div className={classes.left} />
          <Link variant="heading" underline="none" color="inherit" className={classes.title} href="/Founders">
            {'Founders'}
          </Link>
          <div className={classes.left} />
          <Link variant="h6" underline="none" color="inherit" className={classes.title} href="/Investors">
            {'Investors'}
          </Link>
          <div className={classes.left} />
          <Link variant="h6" underline="none" color="inherit" className={classes.title} href="/About">
            {'About'}
          </Link>
          <div className={classes.left} />
          <Link variant="h6" underline="none" color="inherit" className={classes.title} href="/Blog">
            {'Blog'}
          </Link>
          <div className={classes.right}>
            <Button color="inherit" variant="h6" underline="none" className={classes.rightLink} href="/Login/">
              {'Login'}
            </Button>
            <Button
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/Signup/"
            >
              {'Sign Up'}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
