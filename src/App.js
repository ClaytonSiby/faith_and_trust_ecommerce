/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// styles
import './default.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
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
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <MainLayout>
                <Admin />
              </MainLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </main>
  );
};

export default App;
