import React from 'react';
import PropTypes from 'prop-types';

// Importing @material-ui/ components
import { withStyles } from '@material-ui/core/styles';

// Importing Components
import { Button } from '../../../components/Button';
import { Typography } from '../../../components/Typography';
import { HeroLayout } from '../../HomePage/Sections/HeroLayout';

// Styling
const backgroundImage = '../../img/HomePageImage.png';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#D9B59D', // Beige
    backgroundPosition: 'center',
  },
  ButtonSignUp: {
    minWidth: 150,
    backgroundColor: '#Deba54', // Gold
  },
  ButtonLogIn: {
    minWidth: 100,
    marginTop: theme.spacing(1, 'auto'),
  },
  h3: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  h5: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  subtext: {
    marginTop: theme.spacing(4),
  },
});

function HeroImage(props) {
  const { classes } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <Typography align="center" color="2B3D5B" variant="h3">
        Investisseuse
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Connecting remarkable business founders with ideal investors
      </Typography>
      <Button
        color="inherit"
        variant="contained"
        size="large"
        className={classes.ButtonSignUp}
        component="a"
        href="/Signup"
      >
        Signup
      </Button>
      <Typography variant="body2" color="inherit" className={classes.subtext}>
        Build your dream with the right foundation!
      </Typography>
      <Button
        color="inherit"
        variant="contained"
        size="small"
        className={classes.ButtonLogIn}
        component="a"
        href="/Login"
      >
        Login
      </Button>
    </HeroLayout>
  );
}

HeroImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroImage);
