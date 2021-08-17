import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core/';
import { useMutation } from '@apollo/client';
import { MemoryRouter as Router } from 'react-router';
import { Form, Field, FormSpy } from 'react-final-form';
import { UrlField } from 'react-admin';

// ----------------------------------------------------------------------

// Imports from Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { DropzoneArea } from 'material-ui-dropzone';
import { Input } from '@material-ui/core/';

// ----------------------------------------------------------------------

// Components for this page
import Auth from '../../state/auth';
import AppFooter from '../../components/Footer';
import { ADD_BUSINESS } from '../../api/mutations';
import NavBar from '../../components/navigation/NavBar';
import AppForm from '../../components/form/AppForm';
import { email, required } from '../../components/form/validate';
import FormButton from '../../components/button/FormButton';
import Button from '../../components/button/button';
import FormFeedback from '../../components/form/FormFeedback';
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
  field: {
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
    logo: '',
    sharePrice: '',
    shareQuantity: '',
    pitchDeck: '',
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
          <Typography variant="h3" gutterBottom align="center">
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
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={18} sm={12}>
              <FormControl>
                <InputLabel htmlFor="companyName">Company Name</InputLabel>
                <Input id="companyName"></Input>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={18} sm={12}>
              <FormControl>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input id="description"></Input>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={18} sm={12}>
              <FormControl>
                <InputLabel htmlFor="website">Website</InputLabel>
                <Input id="website"></Input>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={18} sm={12}>
              <FormControl>
                <InputLabel htmlFor="shareQuantity">Share Quantity</InputLabel>
                <Input id="sharequantity"></Input>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={18} sm={12}>
              <FormControl>
                <InputLabel htmlFor="sharePrice">Share Price</InputLabel>
                <Input id="shareprice" startAdornment={<InputAdornment position="start">$</InputAdornment>}></Input>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={18} sm={12}>
              <FormControl>
                <DropZonePitchDeck id="pitchDeck" />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={18} sm={12}>
              <FormControl>
                <DropZoneLogo id="logo" />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={8}>
            <Grid item xs={18} sm={12}>
              <Button
                onSubmit={handleFormSubmit}
                style={{ color: 'white', backgroundColor: '#deba54' }}
                variant="contained"
              >
                Create Business
              </Button>
            </Grid>
          </Grid>
        </form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}
export default NewBusinessProfile;
