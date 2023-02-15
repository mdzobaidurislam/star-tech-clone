import {cartConstants} from './constants';
import {toast} from 'react-toastify';
import axios from 'axios';

export const ADD_TO_CART = product => async (dispatch, getState) => {
  const state = getState().cartStore;
  const {cart} = state;

  const existItem = cart.cartItems.find(x => x.slug === product.slug);
  const quantity = existItem ? existItem.quantity + 1 : 1;
  const {data} = await axios.get(`/api/products/${product._id}`);

  if (data.countInStock < quantity) {
    return toast.error('Sorry. Product is out of stock');
  }

  dispatch({
    type: cartConstants.CART_ADD_ITEM,
    payload: {...product, quantity},
  });
  toast.success('Product added to the cart');
};

export const UPDATE_TO_CART = (item, qty) => {
  return async dispatch => {
    const quantity = Number(qty);
    if (item.countInStock < quantity) {
      toast.error('Sorry. Product is out of stock');
      return;
    }
    dispatch({
      type: cartConstants.CART_ADD_ITEM,
      payload: {...item, quantity},
    });
    toast.success(' Product update in the cart');
  };
};

export const REMOVE_TO_CART = product => {
  return async dispatch => {
    dispatch({
      type: cartConstants.CART_REMOVE_ITEM,
      payload: product,
    });
    toast.success(' Product remove in the cart');
  };
};

export const reset_to_cart = product => {
  return async dispatch => {
    dispatch({
      type: cartConstants.CART_RESET,
    });
  };
};
export const CART_TO_CLEAR_ITEMS = () => {
  return async dispatch => {
    dispatch({
      type: cartConstants.CART_CLEAR_ITEMS,
    });
  };
};

export const SAVE_TO_PAYMENT_METHOD = paymentMethod => {
  return async dispatch => {
    dispatch({
      type: cartConstants.SAVE_PAYMENT_METHOD,
      payload: paymentMethod,
    });
    toast.success(' Payment Method added.');
  };
};

export const SAVE_TO_SHIPPING_ADDRESS = (
  fullName,
  address,
  city,
  postalCode,
  country,
) => {
  return async dispatch => {
    dispatch({
      type: cartConstants.SAVE_SHIPPING_ADDRESS,
      payload: {fullName, address, city, postalCode, country},
    });
    toast.success(' Shipping address added.');
  };
};
