import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { Link } from '@material-ui/core/';
import { useMutation } from '@apollo/client';
import Auth from '../state/auth';
import { ADD_USER } from '../api/mutations';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

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
import Password from '../components/Password';

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
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
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
              <TextField
                label="First Name"
                id="firstName"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={18} sm={12}>
              <TextField
                label="Last Name"
                id="lastName"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Form.Group>
        <Grid container spacing={5}>
          <Grid item xs={18} sm={12}>
            <Password />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={18} sm={12}>
            <TextField
              label="Email Address"
              id="email"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={18} sm={12}>
            <Form.Group margin="normal" variant="filled" />
            <Typography variant="h8">Please select if you are a Founder</Typography>
            <br />
            <label margin="normal" variant="filled" className={classes.textField} for="founder">
              Founder
            </label>
            <input type="checkbox" id="founder" name="founder" value={formState.founder} onChange={handleChange} />
          </Grid>
        </Grid>

        <FormButton
          to="/Profile"
          type="submit"
          className={classes.button}
          color="secondary"
          component={RouterLink}
          fullWidth
        >
          Submit
        </FormButton>
      </AppForm>
    </React.Fragment>
  );
}

export default Signup;
