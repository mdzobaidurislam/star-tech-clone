import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = () => {
  const categories = [
    {
      _id: 1,
      name: 'Category',
      image: '/assets/cat/1.png',
    },
    {
      _id: 2,
      name: 'Category',
      image: '/assets/cat/2.png',
    },
    {
      _id: 3,
      name: 'Category',
      image: '/assets/cat/3.png',
    },
    {
      _id: 4,
      name: 'Category',
      image: '/assets/cat/9.png',
    },
    {
      _id: 5,
      name: 'Category',
      image: '/assets/cat/5.png',
    },
    {
      _id: 6,
      name: 'Category',
      image: '/assets/cat/6.png',
    },
    {
      _id: 7,
      name: 'Category',
      image: '/assets/cat/7.png',
    },
    {
      _id: 8,
      name: 'Category',
      image: '/assets/cat/8.png',
    },
    {
      _id: 9,
      name: 'Category',
      image: '/assets/cat/9.png',
    },
    {
      _id: 10,
      name: 'Category',
      image: '/assets/cat/10.png',
    },
    {
      _id: 11,
      name: 'Category',
      image: '/assets/cat/11.png',
    },
    {
      _id: 12,
      name: 'Category',
      image: '/assets/cat/12.png',
    },
    {
      _id: 13,
      name: 'Category',
      image: '/assets/cat/13.png',
    },
    {
      _id: 14,
      name: 'Category',
      image: '/assets/cat/14.png',
    },
    {
      _id: 15,
      name: 'Category',
      image: '/assets/cat/15.png',
    },
    {
      _id: 16,
      name: 'Category',
      image: '/assets/cat/16.png',
    },
    {
      _id: 17,
      name: 'Category',
      image: '/assets/cat/17.png',
    },
  ];
  return (
    <div className="category">
      <div className=" px-[100px]">
        <div class="grid grid-rows-1 grid-flow-col gap-4">
          <div className="heading text-center ">
            <h2
              className="text-[20px] text-[#222] font-[600]
            ">
              Featured Category
            </h2>
            <p>Get Your Desired Product from Featured Category!</p>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-8 sm:grid-cols-3  gap-4 mt-[50px]">
          {categories.map(item => (
            <>
              <Link href={`category/${item._id}`} key={item._id} legacyBehavior>
                <a>
                  <div className="card_item group/item hover:shadow-lg">
                    <div className="card_thum ">
                      <Image
                        src={item.image}
                        alt="cat"
                        width="48"
                        height="48"
                        className="m-0"
                      />
                    </div>
                    <h5 className="group-hover/item:text-primary ">
                      {item.name}
                    </h5>
                  </div>
                </a>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
