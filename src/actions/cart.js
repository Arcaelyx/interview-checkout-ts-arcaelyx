import request from '../utils/request';

const { REACT_APP_HOST: HOST } = process.env;

const success = (type, payload) => ({ type: `${type}_CART_SUCCESS`, payload })
const fail = (type, error) => ({ type: `${type}_CART_FAIL`, error })

export const addToCart = ({ cartID, ...data }) => dispatch =>
  request.post(`${HOST}/api/v1/carts/${cartID}/cart_items`, data)
    .then(data => dispatch(success('ADD_TO', data)))
    .catch(error => dispatch(fail('ADD_TO', error)))

export const createCart = () => dispatch =>
  request.post(`${HOST}/api/v1/carts`)
    .then(data => dispatch(success('CREATE', data)))
    .catch(error => dispatch(fail('CREATE', error)))

export const deleteFromCart = ({ cartID, cartItemID }) => dispatch =>
  request.delete(`${HOST}/api/v1/carts/${cartID}/cart_items/${cartItemID}`)
    .then(data => dispatch(success('DELETE_FROM', data)))
    .catch(error => dispatch(fail('DELETE_FROM', error)))

export const getCart = cartID => dispatch =>
  request.get(`${HOST}/api/v1/carts/${cartID}`)
    .then(data => dispatch(success('GET', data)))
    .catch(error => dispatch(fail('GET', error)))