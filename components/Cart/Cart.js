import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export default function Cart() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const state = useSelector(state => state.cartStore);

  const {cart} = state;

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <div className="cart fixed w-[60px] h-[60px] bg-[#081621] right-[20px] bottom-[100px] z-[9999] flex justify-center items-center text-[20px] text-[#fff] rounded-lg shadow-lg hover:bg-secondary ">
        <Link href="/cart" legacyBehavior>
          <a className="flex flex-col ">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="text-[14px]">Cart</span>
          </a>
        </Link>
        {cartItemsCount > 0 && (
          <span className="ml-1 rounded-full bg-primary px-2 py-1 text-xs font-bold text-white absolute top-[-12px] right-[-12px]">
            {cartItemsCount}
          </span>
        )}
      </div>
    </>
  );
}
