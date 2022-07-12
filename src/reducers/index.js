import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import cart from './cart';
import products from './products';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const rootReducer = combineReducers({ cart, products });

export default createStoreWithMiddleware(rootReducer);