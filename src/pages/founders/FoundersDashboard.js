import React, { Fragment } from 'react';

import { Box, Grid, Container, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
// components
// import Page from '../components/page/Page';
import CreateNewBusiness from '../../components/dashboard/founder/CreateNewBusiness';
import BusinessPage from '../../components/dashboard/founder/BusinessPage';
import Messages from '../../components/dashboard/founder/Messages';
import NewInvestors from '../../components/dashboard/founder/NewInvestors';
import BlogPosts from '../../components/dashboard/founder/BlogPosts';
import BusinessPageVisits from '../../components/dashboard/founder/BusinessPageVisits';
// import BlogPosts from '../components/dashboard/founder/BlogPosts';
// import TrafficBySites from '../components/dashboard/founder/TrafficBySites';
// import Tasks from '../components/dashboard/founder/Tasks';

// ----------------------------------------------------------------------

const styles = (theme) => ({
  '@global': {
    body: {
      backgroundImage: "url('/img/DashboardBackgroundImg')",
      backgroundColor: '#CC7D51',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100%',
    },
    html: {
      height: '100%',
    },
    '#componentWithId': {
      height: '100%',
    },
  },
});

export default function FounderDashboard() {
  return (
    // <Page title="Founder Dashboard">
    <Container maxWidth="xl">
      <div styles={{ styles }} />
      <Fragment>
        <CssBaseline />
        <Box sx={{ pb: 5 }}>
          <Typography align="center" variant="h4">
            Hi, Welcome back
          </Typography>
        </Box>
        <Grid align="center">
          <CreateNewBusiness />
        </Grid>
        <Typography align="center" variant="h4">
          Business Stats
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <BusinessPage />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NewInvestors />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Messages />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BlogPosts />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <BusinessPageVisits />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
          <BlogPosts />
        </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
          <TrafficBySites />
        </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
          <Tasks />
        </Grid> */}
        </Grid>
      </Fragment>
    </Container>
    // </Page>
  );
}
