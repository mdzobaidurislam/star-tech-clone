import Link from 'next/link';
import React from 'react';

export default function Breadcrumb() {
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
  return (
    <div className="breadcrumbs bg-[#ffffff] rounded-lg m-h-64 p-[30px] shadow-sm ">
      <div className="b_header flex flex-wrap gap-2 items-center mb-[10px] ">
        <span className="text-[14px]">
          <i class="fa-solid fa-house-chimney"></i>
        </span>
        <span>/</span>
        <Link href="/desktop" legacyBehavior>
          <a className="text-[14px]">Desktop</a>
        </Link>
      </div>
      <div className="child_bredcrum flex flex-wrap items-center justify-start">
        {categoryMenu.map(item => (
          <Link href="/desktop" legacyBehavior key={item._id}>
            <a className="m-[5px] p-[8px_30px] border-[1px] border-[#ddd] inline-block rounded-[50px] text-[14px] hover:bg-secondary hover:text-[#fff]  ">
              Desktop
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
