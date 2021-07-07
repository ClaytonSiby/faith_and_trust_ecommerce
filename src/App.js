/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { auth, handleUserProfile } from './Firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';
// import Header from './components/Header';

// hoc
import WithAuth from './hoc/withAuth';

// layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// styles
import './default.scss';

const App = () => (
  <main className="App">
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )}
      />
      <Route
        exact
        path="/registration"
        render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )}
      />
      <Route
        path="/recovery"
        render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )}
      />
      <Route
        path="/dashboard"
        render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )}
      />
    </Switch>
  </main>
);

export default App;
