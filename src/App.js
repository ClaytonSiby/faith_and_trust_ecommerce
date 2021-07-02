import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './Firebase/utils';
// import Header from './components/Header';

// layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

// styles
import './default.scss';

const initialState = {
  currentUser: null,
};
class App extends Component {
  authListener = null;

  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };
  }

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <main className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            exact
            path="/registration"
            render={() => (currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            ))}
          />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            ))}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
