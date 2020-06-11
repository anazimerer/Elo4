import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Carrinho from './Pages/Carrinho/index.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Carrinho} />
    </Switch>
  );
}
