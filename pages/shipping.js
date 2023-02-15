import React, {useEffect} from 'react';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import {useForm} from 'react-hook-form';
import Cookies from 'js-cookie';
import {useRouter} from 'next/router';
import {SAVE_TO_SHIPPING_ADDRESS} from '../action/cartAction';
import {useDispatch, useSelector} from 'react-redux';

export default function ShppingScreen() {
  const state = useSelector(state => state.cartStore);
  const {cart} = state;
  const {shippingAddress} = cart;
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();
  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({fullName, address, city, postalCode, country}) => {
    dispatch(
      SAVE_TO_SHIPPING_ADDRESS(fullName, address, city, postalCode, country),
    );
    // dispatch({
    //   type: 'SAVE_SHIPPING_ADDRESS',
    //   payload: {fullName, address, city, postalCode, country},
    // });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      }),
    );
    router.push('/payment');
  };
  return (
    <Layout title="Shaping Address">
      <div className="bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
        <CheckoutWizard activeStep={1} />
      </div>
      <div className="bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
        <form
          className="mx-auto max-w-screen-md"
          onSubmit={handleSubmit(submitHandler)}>
          <h1 className="mb-4 text-xl">Shipping Address</h1>
          <div className="mb-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="fullName"
              {...register('fullName', {
                required: 'Please enter fullName',
              })}
              className="w-full"
              id="fullName"
              autoFocus></input>
            {errors.fullName && (
              <div className="text-[red]">{errors.fullName.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="address">Address</label>
            <input
              type="address"
              {...register('address', {
                required: 'Please enter address',
                minLength: {
                  value: 3,
                  message: 'Address is more than 2 characters',
                },
              })}
              className="w-full"
              id="address"
              autoFocus></input>
            {errors.address && (
              <div className="text-[red]">{errors.address.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="city">City</label>
            <input
              type="city"
              {...register('city', {
                required: 'Please enter city',
              })}
              className="w-full"
              id="city"
              autoFocus></input>
            {errors.city && (
              <div className="text-[red]">{errors.city.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="postalCode"
              {...register('postalCode', {
                required: 'Please enter postalCode',
              })}
              className="w-full"
              id="postalCode"
              autoFocus></input>
            {errors.postalCode && (
              <div className="text-[red]">{errors.postalCode.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="country">Country</label>
            <input
              type="country"
              {...register('country', {
                required: 'Please enter country',
              })}
              className="w-full"
              id="country"
              autoFocus></input>
            {errors.country && (
              <div className="text-[red]">{errors.country.message}</div>
            )}
          </div>
          <div className="mb-4">
            <button type="submit" className="ctm_btn  ">
              Next
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

ShppingScreen.auth = true;
