import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';

import publications from '../data/publications.json';
import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={routes.READER}
        render={props => <Reader {...props} items={publications} />}
      />

      <Redirect to={routes.READER} />
    </Switch>
  </BrowserRouter>
);
export default App;
