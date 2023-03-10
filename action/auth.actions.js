import axios from 'axios';
import {authConstants} from './constants';

export const login = user => {
  //   console.log(user);

  return async dispatch => {
    dispatch({type: authConstants.LOGIN_REQUEST});
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token: 'hh',
        user: 'jj',
      },
    });
  };
};

export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {error: 'Failed to login'},
      });
    }
  };
};

export const signout = () => {
  return async dispatch => {
    dispatch({type: authConstants.LOGOUT_REQUEST});
    const res = await axios.post(`/admin/signout`);

    if (res.status === 200) {
      localStorage.clear();
      dispatch({type: authConstants.LOGOUT_SUCCESS});
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};
