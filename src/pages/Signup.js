import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import { Form } from 'semantic-ui-react';
import { Link } from '@material-ui/core/';
import { useMutation } from '@apollo/client';
import { MemoryRouter as Router } from 'react-router';
import { Form, Field, FormSpy } from 'react-final-form';

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
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', founder: false });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: { ...formState },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
              <Link style={{ color: '#Deba54' }} component={RouterLink} to="/Login" align="center" underline="always">
                Log in here
              </Link>
            </Typography>
          </React.Fragment>
          <Form onSubmit={handleFormSubmit} subscription={{ submitting: true }} onChange={handleChange}>
            {({ handleSubmit2, submitting }) => (
              <form onSubmit={handleSubmit2} className={classes.form} noValidate>
                <Field
                  autoComplete="firstName"
                  autoFocus
                  component={InputTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="First Name"
                  margin="normal"
                  name="firstName"
                  required
                  size="large"
                />
                <Field
                  fullWidth
                  size="large"
                  component={InputTextField}
                  disabled={submitting || sent}
                  required
                  name="lastName"
                  autoComplete="lastName"
                  label="Last Name"
                  type="lastName"
                  margin="normal"
                />
                <Field
                  autoComplete="email"
                  autoFocus
                  component={InputTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                  size="large"
                />
                <Typography style={{ size: 'small' }}>Please select if you are a Founder</Typography>
                <label margin="normal" variant="filled" className={classes.textField} for="founder">
                  Founder
                </label>
                <input type="checkbox" id="founder" name="founder" value={formState.founder} onChange={handleChange} />
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>
                <Grid container spacing={5}>
                  <Grid item xs={18} sm={12}>
                    <FormButton
                      className={classes.button}
                      disabled={submitting || sent}
                      size="large"
                      color="#white"
                      fullWidth
                    >
                      {submitting || sent ? 'In progress…' : 'Sign In'}
                    </FormButton>
                  </Grid>
                </Grid>
              </form>
            )}
          </Form>
        </AppForm>
      </Paper>
      <AppFooter />
    </React.Fragment>
  );
}

export default Signup;
