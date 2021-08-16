import React from 'react';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

// Imports from Material Ui
import { withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';

// ----------------------------------------------------------------------

// Components for this page
import HeroLayout from './sections/HeroLayout';
import HeroImage from './sections/HeroImage';
import AboutUs from './sections/AboutUs';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <Container className="container">
      <HeroImage />
      <AboutUs />
      <Footer />
    </Container>
  );
};

export default HomePage;
