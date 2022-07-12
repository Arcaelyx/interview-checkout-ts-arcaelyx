const initialState = {
  id: 0,
  imageSrc: '/images/loading.svg',
  name: 'Loading...',
  priceCents: 0,
};

const products = (state = [initialState], action = { type: '', payload: [] }) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

export default products;