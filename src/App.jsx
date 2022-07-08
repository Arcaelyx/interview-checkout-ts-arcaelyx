import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import { options, response } from './utils/request';

import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Header from './components/Header';
import NotFound from './components/NotFound';

const { REACT_APP_HOST: HOST } = process.env;

const placeholderProduct = {
  id: 0,
  imageSrc: '/images/loading.svg',
  name: 'Loading...',
  priceCents: 0,
};

const loadProducts = props => () =>
  fetch(`${HOST}/api/v1/products`, options('GET', {}))
    .then(response)
    .then(data => props.setProducts(data.data))
    .catch(console.log);

const addToCart = (cartId, productId, quantity) =>
  fetch(`${HOST}/api/v1/carts/${cartId}/cart_items`, options('POST', { productId, quantity }))
    .then(response)
    .catch(console.log);

const App = () => {
  const [products, setProducts] = useState([placeholderProduct]);
  useEffect(loadProducts({ setProducts }), []);

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='App-main'>
          <Switch>
            <Route path='/cart'>
              <Cart products={products} />
            </Route>
            <Route exact path='/'>
              <Catalog
                products={products}
                onClick={productID => addToCart(undefined, productID, 1)}
              />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;