import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { Link } from '@material-ui/core/';
import { useMutation } from '@apollo/client';
import Auth from '../state/auth';
import { ADD_USER } from '../api/mutations';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MemoryRouter as Router } from 'react-router';

import NavBar from '../components/navigation/NavBar';
import AppForm from '../components/form/AppForm';
import { email, required } from '../components/form/validate';
import FormButton from '../components/button/FormButton';
import Button from '../components/button/button';
import FormFeedback from '../components/form/FormFeedback';
import { Field, FormSpy } from 'react-final-form';
import Typography from '../components/typography/Typography';
import InputTextField from '../components/form/InputTextField';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function Signup(props) {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', role: '' });
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
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const role = [
    { key: 'Founder', text: 'Founder', value: 'founder' },
    { key: 'Investor', text: 'Investor', value: 'investor' },
  ];

  return (
    <React.Fragment>
      <NavBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Already have an account? '}
            <Link href="/Login" align="center" underline="always">
              Log in here
            </Link>
          </Typography>
        </React.Fragment>
        <Form.Group Submit={handleFormSubmit} widths="equal">
          <Grid container spacing={5}>
            <Grid item xs={18} sm={12}>
              <Form.Input
                fluid
                label="First name"
                placeholder="First name"
                type="firstName"
                id="firstName"
                onChange={handleChange}
                component={InputTextField}
              />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={18} sm={12}>
              <Form.Input
                fluid
                label="Last name"
                placeholder="Last name"
                type="lastName"
                id="lastName"
                onChange={handleChange}
                component={InputTextField}
              />
            </Grid>
          </Grid>
        </Form.Group>
        <Grid container spacing={5}>
          <Grid item xs={18} sm={12}>
            <Form.Group widths="equal">
              <Form.Input fluid label="Password" placeholder="*****" type="password" id="pwd" onChange={handleChange} />
              <Form.Input
                fluid
                label="Confirm Password"
                placeholder="*****"
                type="confirmPassword"
                id="confirmPwd"
                onChange={handleChange}
                component={InputTextField}
              />
            </Form.Group>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={18} sm={12}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email Address"
                placeholder="youremail@address.com"
                type="email"
                id="email"
                onChange={handleChange}
                component={InputTextField}
              />
            </Form.Group>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={18} sm={12}>
            <Form.Group options={role} />
            <Typography variant="h6">Are you an Investor or Founder?"</Typography>
            <Form.Checkbox label="Founder" />
            <Form.Checkbox label="Investor" />
          </Grid>
        </Grid>

        <FormButton
          type="submit"
          className={classes.button}
          color="secondary"
          component={RouterLink}
          to="/Founders"
          fullWidth
        >
          {setFormState || formState ? 'In progress…' : 'Sign Up'}
        </FormButton>
      </AppForm>
    </React.Fragment>
  );
}

export default Signup;
