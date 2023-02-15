import Cookies from 'js-cookie';
import {orderConstants} from '../action/constants';

const initialState = {
  loading: true,
  order: {},
  error: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderConstants.FETCH_BYID_REQUEST:
      return {...state, loading: true, error: ''};
    case orderConstants.FETCH_BYID_SUCCESS:
      return {...state, loading: false, order: action.payload, error: ''};
    case orderConstants.FETCH_BYID_FAIL:
      return {...state, loading: false, error: action.payload};

    // order history
    case orderConstants.FETCH_REQUEST:
      return {...state, loading: true, error: ''};
    case orderConstants.FETCH_SUCCESS:
      return {...state, loading: false, orders: action.payload, error: ''};
    case orderConstants.FETCH_FAIL:
      return {...state, loading: false, error: action.payload};

    case orderConstants.PAY_REQUEST:
      return {...state, loadingPay: true};
    case orderConstants.PAY_SUCCESS:
      return {...state, loadingPay: false, successPay: true};
    case orderConstants.PAY_FAIL:
      return {...state, loadingPay: false, errorPay: action.payload};
    case orderConstants.PAY_RESET:
      return {...state, loadingPay: false, successPay: false, errorPay: ''};

    case orderConstants.DELIVER_REQUEST:
      return {...state, loadingDeliver: true};
    case orderConstants.DELIVER_SUCCESS:
      return {...state, loadingDeliver: false, successDeliver: true};
    case orderConstants.DELIVER_FAIL:
      return {...state, loadingDeliver: false};
    case orderConstants.DELIVER_RESET:
      return {
        ...state,
        loadingDeliver: false,
        successDeliver: false,
      };

    default:
      state;
  }
  return state;
};

export default orderReducer;
