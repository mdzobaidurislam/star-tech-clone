import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_TO_CART, UPDATE_TO_CART} from '../action/cartAction';
function CartScreen() {
  const router = useRouter();
  const state = useSelector(state => state.cartStore);

  const dispatch = useDispatch();
  const {
    cart: {cartItems},
  } = state;

  const removeItemHandler = item => {
    dispatch(REMOVE_TO_CART(item));
  };
  const updateCartHandler = (item, qty) => {
    dispatch(UPDATE_TO_CART(item, qty));
  };
  return (
    <Layout title="Shopping cart">
      <div className="breadcrumbs bg-[#ffffff] rounded-lg m-h-64 p-[30px] shadow-sm ">
        <h1 className="mb-4 text-xl">Shopping Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty{' '}
          <Link href="/" legacyBehavior>
            <a className="ctm_btn">Continue Shopping</a>
          </Link>
        </div>
      ) : (
        <div className="bg-[#ffffff] rounded-lg p-[30px] shadow-sm m-4 ">
          <div className="grid md:grid-cols-4 md:gap-5 ">
            <div className="md:col-span-3 overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-1 bg-[#f5f7f9] h-[50px] ">
                  <th className="px-5 text-left">Item</th>
                  <th className="px-5 text-right">Quantity</th>
                  <th className="px-5 text-right">Price</th>
                  <th className="px-5 text-center">Action</th>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.slug} className="border-b border-[#666]">
                      <td>
                        <Link legacyBehavior href={`/product/${item.slug}`}>
                          <a className="flex items-center gap-5">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={150}
                              height={150}></Image>
                            &nbsp;
                            {item.name}
                          </a>
                        </Link>
                      </td>
                      <td className="p-5 text-right">
                        <select
                          value={item.quantity}
                          onChange={e =>
                            updateCartHandler(item, e.target.value)
                          }>
                          {[...Array(item.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-center">
                        <button
                          onClick={() => removeItemHandler(item)}
                          className="text-primary">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="card p-5">
                <ul>
                  <li>
                    <div className="pb-3 text-xl">
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                      : $
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push('login?redirect=/shipping')}
                      className="ctm_btn  w-full">
                      Check Out
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

// export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
export default dynamic(() => Promise.resolve(CartScreen), {ssr: false});
