import React from 'react';
import { Redirect } from 'react-router-dom';
import { QUERY_USER } from '../api/queries';
import { useQuery } from '@apollo/client';

// ----------------------------------------------------------------------

// Components for this page
import FoundersDashboard from './founders/FoundersDashboard';
import InvestorsDashboard from './investors/InvestorsDashboard';

const Profile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (!loading && data.user.role === 'founder') {
    return <Redirect exact path="/InvestorsDashboard" component={InvestorsDashboard} />;
  } else {
    <Redirect exact path="/FoundersDashboard" component={FoundersDashboard} />;
  }
};

export default Profile;
