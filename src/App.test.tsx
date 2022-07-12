import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from './reducers';

import App from './App';

test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
