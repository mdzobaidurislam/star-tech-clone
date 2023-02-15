import React from 'react';
import Layout from '../../components/Layout';

import Link from 'next/link';
import AccountLayout from '../../components/AccountLayout';

export default function AccountScreen() {
  const myaccount = [
    {
      _id: 1,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Orders',
      url: '/order-history',
    },
    {
      _id: 2,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Edit Profile',
      url: 'orders',
    },
    {
      _id: 3,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Change Password',
      url: 'orders',
    },
    {
      _id: 4,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Address',
      url: 'orders',
    },
    {
      _id: 5,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Wish List',
      url: 'orders',
    },
    {
      _id: 6,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Save Pc',
      url: 'orders',
    },
    {
      _id: 7,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Star Points',
      url: 'orders',
    },
    {
      _id: 8,
      icon: `fa-brands fa-first-order-alt`,
      text: 'Your Transactions',
      url: 'orders',
    },
  ];
  return (
    <Layout title="My Account ">
      <AccountLayout>
        <div className="my_box_area">
          <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1  gap-4 mt-[50px] pb-[80px]">
            {myaccount.map(item => (
              <Link href={item.url} key={item._id}>
                <div className="my_box_card bg-[#ffffff] rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                  <div className="my_box_inner flex flex-col p-[20px] items-center justify-center gap-5 ">
                    <div className="my_icon text-[20px] text-[#6e2594] w-[50px] h-[50px] rounded-[50%] flex  items-center justify-center bg-[#ddd]  ">
                      <i class={`${item.icon}`}></i>
                    </div>
                    <h5 className="text-[14px] font-[500] "> {item.text} </h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AccountLayout>
    </Layout>
  );
}
