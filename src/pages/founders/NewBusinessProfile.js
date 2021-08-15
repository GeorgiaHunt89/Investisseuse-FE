import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// import { UrlField } from 'react-admin';
import Auth from '../../state/auth';
import { ADD_BUSINESS } from '../../api/mutations';
import { Link as RouterLink } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { DropzoneArea } from 'material-ui-dropzone';

import { MemoryRouter as Router } from 'react-router';

import NavBar from '../../components/navigation/NavBar';
import AppForm from '../../components/form/AppForm';
import { email, required } from '../../components/form/validate';
import FormButton from '../../components/button/FormButton';
import Button from '../../components/button/button';
import FormFeedback from '../../components/form/FormFeedback';
import { Field, FormSpy } from 'react-final-form';
import Typography from '../../components/typography/Typography';
import InputTextField from '../../components/form/InputTextField';
import DropZonePitchDeck from '../../components/dashboard/founder/DropZonePitchDeck';
import DropZoneLogo from '../../components/dashboard/founder/DropZoneLogo';
// import CategorySelection from '../components/CategorySelection';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function NewBusinessProfile(props) {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    companyName: '',
    description: '',
    website: '',
    // logo: '',
    sharePrice: '',
    shareQuantity: '',
    // pitchDeck: '',
    category: '',
    amount: '',
    owner: '',
    _id: '',
    firstName: '',
  });
  const [addBusiness] = useMutation(ADD_BUSINESS);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addBusiness({
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

  return (
    <React.Fragment>
      <NavBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            New Business Profile
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={18} sm={12}>
              <Typography variant="body2" align="center">
                Create a new business profile to display to investors and raise required funding.
              </Typography>
            </Grid>
          </Grid>
        </React.Fragment>
        <Form.Group Submit={handleFormSubmit} widths="equal">
          <Grid>
            <Grid>
              <TextField
                label="Company Name"
                id="companyName"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Form.Group>

        <TextField
          id="description"
          label="Description"
          style={{ margin: 8 }}
          //   helperText="Write a short and sweet description about your business"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Grid>
          <Grid>
            <Form.Group>
              <TextField
                label="Website"
                id="website"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Form.Group>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Form.Group>
              <FormControl margin="normal" fullWidth className={classes.margin} variant="filled">
                <InputLabel htmlFor="sharePrice">Share Price</InputLabel>
                <FilledInput id="sharePrice" startAdornment={<InputAdornment position="start">$</InputAdornment>} />
              </FormControl>
            </Form.Group>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Form.Group>
              <TextField
                label="Share Quantity"
                id="shareQuantity"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Form.Group>
          </Grid>
        </Grid>
        <DropZonePitchDeck />
        <DropZoneLogo />
        {/* <CategorySelection /> */}
        <FormButton
          type="submit"
          className={classes.button}
          color="secondary"
          component={RouterLink}
          to="/FoundersDashboard"
          fullWidth
        >
          {setFormState || formState ? 'Loading…' : 'Created'}
        </FormButton>
      </AppForm>
    </React.Fragment>
  );
}

export default NewBusinessProfile;
