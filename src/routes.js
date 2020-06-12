import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Carrinho from './Pages/Carrinho/index.js';

import Home from './Pages/Home';

import Choose from './Pages/Choose';
import Product from './Pages/Solo_Product';
import AddProducts from './components/AddProducts';
import Vendedor from './Pages/Vendedor';

import Buy from './Pages/Compra';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Choose} />
      <Route path="/inicio" component={Home} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/buy" component={Buy} />

      <Route path="/Product:id" render={(child) => <Product {...child} />} />

      <Route path="/AddProducts" component={AddProducts} />
      <Route path="/vendedor" component={Vendedor} />
    </Switch>
  );
}
