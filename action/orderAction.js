import {toast} from 'react-toastify';
import {getError} from '../utils/error';
import {orderConstants} from './constants';

import axios from 'axios';

export const FETCH_ORDER_BYID_API = orderId => async dispatch => {
  try {
    dispatch({type: orderConstants.FETCH_BYID_REQUEST});
    const {data} = await axios.get(`/api/orders/${orderId}`);
    dispatch({
      type: orderConstants.FETCH_BYID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: orderConstants.FETCH_BYID_FAIL,
      payload: getError(err),
    });
  }
};

export const FETCH_ORDER_API = () => async dispatch => {
  try {
    dispatch({type: orderConstants.FETCH_REQUEST});
    const {data} = await axios.get(`/api/orders/history`);
    dispatch({
      type: orderConstants.FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: orderConstants.FETCH_FAIL,
      payload: getError(err),
    });
  }
};

export const DELIVER_HANDLER_ORDER_API = order => async dispatch => {
  try {
    dispatch({type: orderConstants.DELIVER_REQUEST});
    const {data} = await axios.put(
      `/api/admin/orders/${order._id}/deliver`,
      {},
    );
    dispatch({type: orderConstants.DELIVER_SUCCESS, payload: data});
    toast.success('Order is delivered');
  } catch (err) {
    dispatch({type: orderConstants.DELIVER_FAIL, payload: getError(err)});
    toast.error(getError(err));
  }
};
