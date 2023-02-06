import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import TopBar from './TopBar';
export default function Header() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const categoryMenu = [
    {
      _id: 1,
      name: 'Desktop',
      children: [
        {
          _id: 101,
          name: 'Desktop Offer',
          parentId: 1,
        },
        {
          _id: 170,
          name: 'Star PC',
          parentId: 1,
        },
        {
          _id: 180,
          name: 'Gaming PC',
          parentId: 1,
        },
        {
          _id: 1801,
          name: 'Brand PC',
          parentId: 1,
        },
        {
          _id: 1802,
          name: 'All-in-One PC',
          parentId: 1,
        },
        {
          _id: 1803,
          name: 'Portable Mini PC',
          parentId: 1,
        },
        {
          _id: 1303,
          name: 'Apple Mac Mini',
          parentId: 1,
        },
        {
          _id: 1103,
          name: 'Apple iMac',
          parentId: 1,
        },
        {
          _id: 1203,
          name: 'Apple Mac Studio',
          parentId: 1,
        },
      ],
    },
    {
      _id: 2,
      name: 'Laptop',
    },
    {
      _id: 3,
      name: 'Component',
    },
    {
      _id: 4,
      name: 'Monitor',
    },
    {
      _id: 5,
      name: 'UPS',
    },
    {
      _id: 6,
      name: 'Phone',
    },
    {
      _id: 7,
      name: 'Tablet',
    },
    {
      _id: 8,
      name: 'Office Equipment',
    },
    {
      _id: 9,
      name: 'Camera',
    },
    {
      _id: 10,
      name: 'Security',
    },
    {
      _id: 11,
      name: 'Networking',
    },
    {
      _id: 12,
      name: 'Software',
    },
    {
      _id: 13,
      name: 'Serve & Storage',
    },
    {
      _id: 14,
      name: 'Accessories',
    },
    {
      _id: 15,
      name: 'Gadget',
    },
    {
      _id: 15,
      name: 'Gaming',
    },
    {
      _id: 16,
      name: 'TV',
    },
    {
      _id: 17,
      name: 'AC',
    },
  ];

  function createMultiMenu(categoryMenu) {
    const cateList = [];
    for (let item of categoryMenu) {
      cateList.push(
        <>
          <li
            className={`group/item ${item.children ? 'has_children' : ''} `}
            key={item._id}>
            <Link href="/" legacyBehavior>
              <a className="text-lg hover:text-primary  ">{item.name}</a>
            </Link>
            {item.children && (
              <ul className={`dropdown_menu  hidden group-hover/item:block `}>
                {item.children?.length > 0
                  ? createMultiMenu(item.children)
                  : ''}
              </ul>
            )}
          </li>
        </>,
      );
    }
    return cateList;
  }
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = e => {
    const header = document.querySelector('.custom-nav');
    const m_header = document.querySelector('.m_custom_nav');
    const scrollTop = window.scrollY;
    if (scrollTop >= 1) {
      header.classList.add('stikyadded');
      m_header.classList.add('stikyadded');
    } else {
      header.classList.remove('stikyadded');
      m_header.classList.remove('stikyadded');
    }
  };
  return (
    <>
      <header className="header ">
        <div className="hidden lg:block ">
          <TopBar />
        </div>
        <div
          className={`main_menu_area shadow-lg custom-nav ${
            toggle ? 'open' : ''
          }`}>
          <div className=" px-[20px]">
            <ul className="main_menu_items">{createMultiMenu(categoryMenu)}</ul>
          </div>
        </div>
      </header>
      <div className="lg:hidden md:block">
        <div className="mobaile_header  flex justify-between items-center px-[20px] bg-[#061520] m_custom_nav">
          <div className="bar text-[#fff]" onClick={() => setToggle(!toggle)}>
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="m_logo">
            <Image width="150" height="70" src="/assets/logo.png" alt="logo" />
          </div>
          <div className="m_right flex justify-between items-center gap-5 text-[14px]">
            <div className="m_search text-primary">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="m_cart text-[#fff] relative">
              <i class="fa-solid fa-cart-plus"></i>
              <span className=" absolute  w-[20px] h-[20px] bg-primary rounded-[50%]  flex justify-center items-center text-[12px] font-[600] top-[-10px] right-[-15px] ">
                11
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className={`overlay ${toggle ? 'open' : ''}`}>
        h
      </div>
    </>
  );
}
