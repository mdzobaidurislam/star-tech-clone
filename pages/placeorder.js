import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import {toast} from 'react-toastify';
import {getError} from '../utils/error';
import {useDispatch, useSelector} from 'react-redux';
import {CART_TO_CLEAR_ITEMS} from '../action/cartAction';

export default function PlaceOrderScreen() {
  const state = useSelector(state => state.cartStore);
  const {cart} = state;
  const {cartItems, shippingAddress, paymentMethod} = cart;
  const dispatch = useDispatch();
  const round2 = num => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0),
  );

  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);
  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const {data} = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch(CART_TO_CLEAR_ITEMS());
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        }),
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Place order">
      <div className="bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
        <CheckoutWizard activeStep={3} />
      </div>

      {cartItems.length === 0 ? (
        <div>
          Cart is empty <Link href="/">Go shoping</Link>
        </div>
      ) : (
        <div className="bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
          <h1 className="mb-4 text-2xl font-bold">Place order</h1>
          <div className="grid md:grid-cols-4 md:gap-5">
            <div className="overflow-x-auto md:col-span-3">
              <div className="card p-5">
                <h2 className="mb-2 text-lg font-bold">Shipping Address</h2>
                <div>
                  {shippingAddress.fullName}, {shippingAddress.address},{' '}
                  {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                  {shippingAddress.country}
                </div>
                <div classname="text-secondary">
                  <Link legacyBehavior href="/shipping">
                    <a className="text-secondary font-[700] inline-block ">
                      Edit
                    </a>
                  </Link>
                </div>
              </div>
              <div className="card p-5">
                <h2 className="mb-2 text-lg font-bold">Payment Method</h2>
                <div>{paymentMethod && paymentMethod}</div>
                <div>
                  <Link href="/payment" legacyBehavior>
                    <a className="text-secondary font-[700] inline-block ">
                      Edit
                    </a>
                  </Link>
                </div>
              </div>
              <div className="card overflow-x-auto p-5">
                <h2 className="mb-2 text-lg">Order Items</h2>
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="px-5 text-left">Item</th>
                      <th className="    p-5 text-right">Quantity</th>
                      <th className="  p-5 text-right">Price</th>
                      <th className="p-5 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item._id} className="border-b">
                        <td>
                          <Link href={`/product/${item.slug}`} legacyBehavior>
                            <a className="flex items-center">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}></Image>
                              &nbsp;
                              {item.name}
                            </a>
                          </Link>
                        </td>
                        <td className=" p-5 text-right">{item.quantity}</td>
                        <td className="p-5 text-right">${item.price}</td>
                        <td className="p-5 text-right">
                          ${item.quantity * item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-xl">
                  <Link href="/cart" legacyBehavior>
                    <a className="ctm_btn p-[10px_20px] inline-block mt-5">
                      Edit
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card  p-5">
                <h2 className="mb-2 text-2xl font-bold">Order Summary</h2>
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between">
                      <div>Items</div>
                      <div>${itemsPrice}</div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between">
                      <div>Tax</div>
                      <div>${taxPrice}</div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between">
                      <div>Shipping</div>
                      <div>${shippingPrice}</div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between">
                      <div>Total</div>
                      <div>${totalPrice}</div>
                    </div>
                  </li>
                  <li>
                    <button
                      disabled={loading}
                      onClick={placeOrderHandler}
                      className="ctm_btn w-full">
                      {loading ? 'Loading...' : 'Place Order'}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

PlaceOrderScreen.auth = true;
