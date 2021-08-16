import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

// ----------------------------------------------------------------------

// Imports from Material Ui
import { Form, Field, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';

// ----------------------------------------------------------------------

// Components for this page
import { LOGIN } from '../api/mutations';
import Auth from '../state/auth';
import NavBar from '../components/navigation/NavBar';
import AppForm from '../components/form/AppForm';
import { email, required } from '../components/form/validate';
import FormButton from '../components/button/FormButton';
import FormFeedback from '../components/form/FormFeedback';
import Typography from '../components/typography/Typography';
import InputTextField from '../components/form/InputTextField';
import { styles } from '../components/navigation/Toolbar';

// ----------------------------------------------------------------------

// Styling
const LoginBackgroundImg = '../../img/Login-Background-Img.png';

const useStyles = makeStyles((theme) => ({
  descriptionCard: {
    backgroundImage: `url(${LoginBackgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  form: {
    marginTop: theme.spacing(6),
    backgroundColor: '#fffff', // Beige
    opacity: 0.95,
    backgroundPosition: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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

// ----------------------------------------------------------------------

// Login Function

function Login() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { ...formState },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <NavBar />
      <AppForm>
        <div className={classes.descriptionCard}>
          <React.Fragment>
            <Typography variant="h3" gutterBottom align="center">
              Log In
            </Typography>
            <Typography variant="body2" align="center">
              {'Not a member yet? '}
              <Link style={{ color: '#Deba54' }} component={RouterLink} to="/Signup" align="center" underline="always">
                Sign Up here
              </Link>
            </Typography>
          </React.Fragment>
          <Form onSubmit={handleFormSubmit} subscription={{ submitting: true }} onChange={handleChange}>
            {({ handleSubmit2, submitting }) => (
              <form onSubmit={handleSubmit2} className={classes.form} noValidate>
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
                <Field
                  fullWidth
                  size="large"
                  component={InputTextField}
                  disabled={submitting || sent}
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>
                <FormButton
                  className={classes.button}
                  disabled={submitting || sent}
                  size="large"
                  color="#white"
                  fullWidth
                >
                  {submitting || sent ? 'In progress…' : 'Sign In'}
                </FormButton>
              </form>
            )}
          </Form>
          <React.Fragment>
            <Typography> . </Typography>
            <Typography variant="body2" align="center">
              {'Forgot your password? '}
              <Link
                style={{ color: '#2B3D5B' }}
                component={RouterLink}
                to="/ForgotPassword"
                align="center"
                underline="always"
              >
                Update
              </Link>
            </Typography>
          </React.Fragment>
        </div>
        <div style={{ width: 200 }}>
          <Box component="div" my={2} whiteSpace="nowrap" bgcolor="background.paper">
            White Space Nowrap. White Space Nowrap.
          </Box>
          <Box component="div" my={2} whiteSpace="normal" bgcolor="background.paper">
            White Space Normal. White Space Normal.
          </Box>
        </div>
      </AppForm>
    </React.Fragment>
  );
}

export default Login;
