import {decrement, increment} from '../reducers/auth.reducers';

export const incrementCount = () => dispatch => {
  dispatch({
    type: 'LOGIN_SUCCESS',
    payload: 'hello',
  });
  dispatch(increment());
};

export const decrementCount = () => dispatch => {
  dispatch(decrement());
};
