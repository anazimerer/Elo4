import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';

import Choose from './Pages/Choose';
import Product from './Pages/Solo_Product';
import AddProducts from './components/AddProducts'
import Vendedor from './Pages/Vendedor';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/Choose" component={Choose} />
      <Route path="/Product" component={Product} />

      <Route path='/addProduct' component={AddProducts} />
      <Route path='/vendedor' component={Vendedor} />
    </Switch>
  );
}
