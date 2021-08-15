import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const category = [
  {
    value: 'Finance',
    label: 'Finance',
  },
  {
    value: 'Retail',
    label: 'Retail',
  },
  {
    value: 'Education',
    label: 'Education',
  },
  {
    value: 'Construction',
    label: 'Construction',
  },
  {
    value: 'Transportation',
    label: 'Transport',
  },
  {
    value: 'Technology',
    label: 'Technology',
  },
  {
    value: 'Health',
    label: 'Health',
  },
  {
    value: 'Agriculture',
    label: 'Agriculture',
  },
  {
    value: 'Insurance',
    label: 'Insurance',
  },
  {
    value: 'Hospitality',
    label: 'Hospitality',
  },
  {
    value: 'RealEstate',
    label: 'RealEstate',
  },
  {
    value: 'E-commerce',
    label: 'E-commerce',
  },
  {
    value: 'Media',
    label: 'Media',
  },
  {
    value: 'Marketing',
    label: 'Marketing',
  },
  {
    value: 'Distribution',
    label: 'Distribution',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          value={category}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {category.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
