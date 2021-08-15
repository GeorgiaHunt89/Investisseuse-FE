import React from 'react';

import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
// import Page from '../components/page/Page';
import CreateNewBusiness from '../components/dashboard/founder/CreateNewBusiness';
import BusinessPage from '../components/dashboard/founder/BusinessPage';
import Messages from '../components/dashboard/founder/Messages';
import NewInvestors from '../components/dashboard/founder/NewInvestors';
import Reports from '../components/dashboard/founder/Reports';
import BusinessPageVisits from '../components/dashboard/founder/BusinessPageVisits';
// import BlogPosts from '../components/dashboard/founder/BlogPosts';
// import TrafficBySites from '../components/dashboard/founder/TrafficBySites';
// import Tasks from '../components/dashboard/founder/Tasks';

// ----------------------------------------------------------------------

export default function FounderDashboard() {
  return (
    // <Page title="Founder Dashboard">
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi, Welcome back</Typography>
      </Box>
      <Grid item xs={12} md={6} lg={8}>
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
          <Reports />
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
    </Container>
    // </Page>
  );
}
