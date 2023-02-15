import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
export default function AccountLayout({children}) {
  const myaccount = [
    {
      _id: 1,
      icon: `fa-solid fa-cheese`,
      text: 'Orders',
      url: '/order-history',
    },
    {
      _id: 2,
      icon: `fa-solid fa-user-pen`,
      text: 'Edit Profile',
      url: 'orders',
    },
    {
      _id: 3,
      icon: `fa-solid fa-unlock`,
      text: 'Change Password',
      url: 'orders',
    },
    {
      _id: 4,
      icon: `fa-solid fa-location-dot`,
      text: 'Address',
      url: 'orders',
    },
    {
      _id: 5,
      icon: `fa-solid fa-heart`,
      text: 'Wish List',
      url: 'orders',
    },
    {
      _id: 6,
      icon: `fa-solid fa-laptop-code`,
      text: 'Save Pc',
      url: 'orders',
    },
    {
      _id: 7,
      icon: `fa-solid fa-sun`,
      text: 'Star Points',
      url: 'orders',
    },
    {
      _id: 8,
      icon: `fa-solid fa-boxes-packing`,
      text: 'Store Credit',
      url: 'orders',
    },
  ];
  const router = useRouter();
  return (
    <div className="my_account p-[80px_150px]">
      <div className="my_header bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
        <div className="grid grid-cols-2 content-between">
          <div className="flex flex-wrap gap-5  items-center  ">
            <div className="thum ">
              <Image
                src="/assets/profile.png"
                width="80"
                height="80"
                alt="Profile"
                className="rounded-[50%]"
              />
            </div>
            <div className="my_name">
              <span className="text-primary font-[500]">Welcome</span>
              <h3 className="text-2xl font-[500] ">Md.Zobaidur Islam</h3>
            </div>
          </div>
          <div>
            <div className="point flex flex-wrap items-center justify-center text-center gap-6 ">
              <div className="point_box pl-[50px] pr-[50px] border-l-light border-l-[1px]">
                <p className="text-[#353434]">Start Point</p>
                <p className="text-primary font-[600] text-[25px]">0</p>
              </div>
              <div className="point_box pl-[50px] pr-[50px] border-l-light border-l-[1px]">
                <p className="text-[#353434]">Start Point</p>
                <p className="text-primary font-[600] text-[25px]">0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 px-[10px]">
          <ul className="flex flex-wrap gap-5 pb-[10px]">
            {myaccount.map(item => (
              <li className={` `} key={item._id}>
                <Link href={item.url} legacyBehavior>
                  <a
                    className={`${
                      router.pathname == item.url
                        ? 'text-primary border-b-[2px]'
                        : 'text-light'
                    } text-[14px] hover:text-primary  hover:border-b-[2px] pb-[10px] block `}>
                    <i class={`${item.icon} pr-[5px]`}></i>
                    <span>{item.text}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="children_area mt-10">{children}</div>
    </div>
  );
}
