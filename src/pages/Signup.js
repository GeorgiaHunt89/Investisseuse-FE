import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@material-ui/core/';
import { useMutation } from '@apollo/client';
import { MemoryRouter as Router } from 'react-router';
// import { Form, Field, FormSpy } from 'react-final-form';

// ----------------------------------------------------------------------

// Imports from Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

// ----------------------------------------------------------------------

// Components for this page
import Auth from '../state/auth';
import { ADD_USER } from '../api/mutations';
import NavBar from '../components/navigation/NavBar';
import AppForm from '../components/form/AppForm';
import { email, required } from '../components/form/validate';
import FormButton from '../components/button/FormButton';
import Button from '../components/button/button';
import FormFeedback from '../components/form/FormFeedback';
import Typography from '../components/typography/Typography';
import InputTextField from '../components/form/InputTextField';
import Password from '../components/Password';
import AppFooter from '../components/Footer';
import { linkToRecord } from 'ra-core';

// Styling
const LoginBackgroundImg = '../../img/Login-Background-Img.png';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${LoginBackgroundImg})`,
    backgroundColor: '#D9B59D', // Beige
    backgroundPosition: 'center',
  },
  root: {
    backgroundImage: `url(${LoginBackgroundImg})`,
    backgroundColor: '#Deba54',
  },
  form: {
    marginTop: theme.spacing(6),
    backgroundColor: '#D9B59D', // Beige
    opacity: 0.95,
    backgroundPosition: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: 'white',
  },
  button: {
    backgroundColor: '#2B3D5B', // Navy
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    color: 'white',
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function Signup(props) {
  // const classes = useStyles();
  // const [sent, setSent] = React.useState(false);
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', role: false });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (values) => {
    // event.preventDefault();
    const mutationResponse = await addUser({
      variables: { ...values },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const Checkboxes = (event) => {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  return (
    <React.Fragment>
      <NavBar />
      <Paper>
        <AppForm style={useStyles.LoginBackgroundImg}>
          <React.Fragment>
            <Typography variant="h3" gutterBottom align="center">
              Sign Up
            </Typography>
            <Typography variant="body2" align="center">
              {'Already have an account? '}
              <Link style={{ color: '#Deba54' }} href="/Login" align="center" underline="always">
                Log in here
              </Link>
            </Typography>
          </React.Fragment>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={18} sm={12}>
                <FormControl>
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <Input id="firstName"></Input>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={18} sm={12}>
                <FormControl>
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                  <Input id="lastName"></Input>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={18} sm={12}>
                <FormControl>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email"></Input>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={18} sm={12}>
                <FormControl>
                  <Grid container spacing={8}>
                    <Grid item xs={18} sm={12}></Grid>
                  </Grid>
                  <Checkbox
                    // checked={isTrue}
                    // onChange={(e) => {
                    //   console.log('target checked? - ', e.target.checked);
                    //   setIsTrue(e.target.checked);
                    // }}
                    id="role"
                    value="founder"
                    inputProps={{
                      'aria-label': 'Please click this box if you are a Founder',
                    }}
                  />
                </FormControl>
                <InputLabel htmlFor="role">Check if Founder</InputLabel>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={18} sm={12}>
                <Button style={{ color: 'white', backgroundColor: '#deba54' }} variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </AppForm>
      </Paper>
      <AppFooter />
    </React.Fragment>
  );
}

export default Signup;
