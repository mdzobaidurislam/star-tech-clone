import Cookies from 'js-cookie';
import {cartConstants} from '../action/constants';

const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : {cartItems: [], shippingAddress: {}, paymentMethod: ''},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.CART_ADD_ITEM: {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        item => item.slug === newItem.slug,
      );
      const cartItems = existItem
        ? state.cart.cartItems.map(item =>
            item.name === existItem.name ? newItem : item,
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({...state.cart, cartItems}));
      return {...state, cart: {...state.cart, cartItems}};
    }
    case cartConstants.CART_REMOVE_ITEM: {
      const cartItems = state.cart.cartItems.filter(
        item => item.slug !== action.payload.slug,
      );
      Cookies.set('cart', JSON.stringify({...state.cart, cartItems}));
      return {...state, cart: {...state.cart, cartItems}};
    }
    case cartConstants.CART_RESET:
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: {location: {}},
          paymentMethod: '',
        },
      };
    case cartConstants.CART_CLEAR_ITEMS:
      return {...state, cart: {...state.cart, cartItems: []}};

    case cartConstants.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    case cartConstants.SAVE_PAYMENT_METHOD:
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    default:
      return state;
  }
  return state;
};

export default cartReducer;
