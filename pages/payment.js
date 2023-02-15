import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import {useRouter} from 'next/router';
import {toast} from 'react-toastify';
import Cookies from 'js-cookie';
import {useDispatch, useSelector} from 'react-redux';
import {SAVE_TO_PAYMENT_METHOD} from '../action/cartAction';

export default function PaymentScreen() {
  const router = useRouter();
  const state = useSelector(state => state.cartStore);
  const {cart} = state;
  const {shippingAddress, paymentMethod} = cart;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping');
    }
    setSelectedPaymentMethod(paymentMethod || '');
  }, [paymentMethod, router, shippingAddress]);

  const submitHandler = e => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error('Payment method is required');
    }
    dispatch(SAVE_TO_PAYMENT_METHOD(selectedPaymentMethod));

    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      }),
    );
    router.push('/placeorder');
  };
  return (
    <Layout title="Payment Method">
      <div className="bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
        <CheckoutWizard activeStep={2} />
      </div>
      <div className="bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
        <form onSubmit={submitHandler} className="mx-auto max-w-screen-md">
          <h1 className="mb-4 text-xl">Payment Method</h1>
          {['Paypal', 'Stripe', 'CashOnDelivery'].map(payment => (
            <div key={payment} className="mb-4">
              <input
                id={payment}
                type="radio"
                name="paymentMethod"
                className="p-2 outline-none focus:ring-0"
                checked={selectedPaymentMethod === payment}
                onChange={() => setSelectedPaymentMethod(payment)}
              />
              <label className="p-2" htmlFor={payment}>
                {payment}
              </label>
            </div>
          ))}
          <div className="mb-4 flex justify-between">
            <button
              type="button"
              onClick={() => router.push('/shipping')}
              className="ctm_btn ">
              Back
            </button>
            <button type="submit" className="ctm_btn ">
              Next
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

PaymentScreen.auth = true;
