import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import './default.scss';

const App = () => (
  <main className="App">
    <Header />
    <div className="main">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/registration" component={Registration} />
      </Switch>

    </div>
  </main>
);

export default App;
