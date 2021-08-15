import React from 'react';
import { IndexRoute, Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import requireAuth from './state/require_authentication';

import Home from './pages/home/HomePage';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/navigation/NavBar';
import { StoreProvider } from './state/GlobalState';
import Profile from './pages/Profile';
// import Investors from './pages/Investors';
import founder from './pages/Founders';
import About from './pages/About';
import Blog from './pages/Blog';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BASEURL + '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            {/* <Nav /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exact path="/Investors" component={requireAuth(Investors)} /> */}
              <Route exact path="/Founders" component={requireAuth(founder)} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Blog" component={Blog} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
