import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Vendedor from './Pages/Vendedor';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/vendedor' exact component={Vendedor} />
    </Switch>
  );
}
