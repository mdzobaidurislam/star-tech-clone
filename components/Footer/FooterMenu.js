import Link from 'next/link';
import React from 'react';

export default function FooterMenu() {
  const fMenu = [
    {
      _id: 1,
      name: 'Offer',
      icon: `fa-solid fa-gift`,
    },
    {
      _id: 2,
      name: 'Printer Fest',
      icon: `fa-solid fa-paperclip`,
    },
    {
      _id: 3,
      name: 'Pc Builder',
      icon: `fa-solid fa-laptop`,
    },
    {
      _id: 4,
      name: 'Compare',
      icon: `fa-solid fa-code-compare`,
    },
    {
      _id: 5,
      name: 'Offer',
      icon: `fa-solid fa-user`,
    },
  ];
  return (
    <div className="footer_menu lg:hidden ">
      <div className="f_menu_area w-full ">
        {fMenu.map(item => (
          <div className="f_menu_item" key={item._id}>
            <Link href="/about">
              <div className="f_icon  text-[#fff] text-[20px]">
                <i className={`${item.icon}`}></i>
              </div>
              <h5 className="text-light text-[10px]">{item.name}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
