import request from '../utils/request'

const { REACT_APP_HOST: HOST } = process.env;

const success = payload => ({ type: 'GET_PRODUCTS_SUCCESS', payload });
const fail = error => ({ type: 'GET_PRODUCTS_FAIL', error });

export const getProducts = () => dispatch =>
  request.get(`${HOST}/api/v1/products`)
    .then(({ data = [] }) => dispatch(success(data)))
    .catch(error => dispatch(fail(error)));