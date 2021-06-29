import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './components/Header';

// layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

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
    </Switch>
  </main>
);

export default App;
