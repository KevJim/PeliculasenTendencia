import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/home';
import MovieDescription from '../components/MovieDescription';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route
            exact
            path='/MovieDescription'
            component={MovieDescription}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
