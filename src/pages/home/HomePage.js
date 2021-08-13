import React from 'react';
import PropTypes from 'prop-types';

// Importing @material-ui/ components
import { withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';

// Sections for this page

import HeroLayout from './sections/HeroLayout';
import HeroImage from './sections/HeroImage';

const HomePage = () => {
  return (
    <Container className="container">
      <HeroImage />
    </Container>
  );
};

export default HomePage;
