import { fail, success } from '../actions/products';
import reducer, { initialState } from './products';

test('ensure initial state when provided undefined input', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('ensure state status is properly updated', () => {
  expect(reducer(initialState, success([])))
    .toEqual({
      status: 'succeeded',
      state: []
    });
  expect(reducer(initialState, fail('')))
    .toEqual({
      status: 'failed',
      state: initialState.state
    });
});