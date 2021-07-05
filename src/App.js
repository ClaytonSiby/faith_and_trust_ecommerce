/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const App = (props) => {
  const { setCurrentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
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
      </Switch>
    </main>
  );
};

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
