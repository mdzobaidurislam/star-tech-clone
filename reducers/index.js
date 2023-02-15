import {combineReducers} from '@reduxjs/toolkit';
import authLogin from './auth.reducers';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  auth: authLogin,
  cartStore: cartReducer,
  orderStore: orderReducer,
});

export default rootReducer;
