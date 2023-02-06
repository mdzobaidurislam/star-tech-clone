import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = () => {
  const categories = [
    {
      _id: 1,
      name: 'Antec AX20 Mid-Tower ATX Gaming Case',
      image: '/assets/pro/1.webp',
    },
    {
      _id: 2,
      name: 'Motorola Moto G31 Smartphone (6/128GB)',
      image: '/assets/pro/2.webp',
    },
    {
      _id: 3,
      name: 'Samsung Galaxy F13 Smartphone (4/64GB)',
      image: '/assets/pro/3.webp',
    },
    {
      _id: 4,
      name: 'Samsung Galaxy Z Flip4 Smartphone (8/256GB)',
      image: '/assets/pro/4.webp',
    },
    {
      _id: 5,
      name: 'Samsung Galaxy Tab A 8.0" Snapdragon 429 2GB RAM 32GB ROM Android Tablet',
      image: '/assets/pro/5.jpg',
    },
    {
      _id: 6,
      name: 'Epson EcoTank L3250 A4 Wi-Fi Multifunction InkTank Printer',
      image: '/assets/pro/6.jpg',
    },
    {
      _id: 7,
      name: 'HP Ink Tank 315 Photo and Document All-in-One Printers',
      image: '/assets/pro/7.webp',
    },
    {
      _id: 8,
      name: 'Pantum P2506W Single Function Mono Laser Printer With Wi-Fi (22 PPM)',
      image: '/assets/pro/8.jpg',
    },
    {
      _id: 9,
      name: 'Dell Vostro 14 3400 Core i3 11th Gen 14" HD Laptop Backlit Keyboard with 03 Years',
      image: '/assets/pro/9.jpg',
    },
    {
      _id: 10,
      name: 'DOEL Freedom A9 AMD A9-9425 14.1" HD Laptop',
      image: '/assets/pro/10.webp',
    },
  ];
  return (
    <div className="product_section">
      <div className=" px-[20px]">
        <div class="grid grid-rows-1 grid-flow-col gap-4">
          <div className="heading text-center ">
            <h2
              className="text-[20px] text-[#222] font-[600]
            ">
              Featured Product
            </h2>
            <p>Get Your Desired Product from Featured Category!</p>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-4 mt-[50px]">
          {categories.map(item => (
            <>
              <Link href={`category/${item._id}`} key={item._id} legacyBehavior>
                <a className="product_item">
                  <div className="card_item group/item hover:shadow-lg ">
                    <div className="product_inner">
                      <div class="marks_price bg-secondary">
                        <span class="mark">Save: 400৳</span>{' '}
                      </div>
                      <div className="card_thum ">
                        <Image
                          src={item.image}
                          alt="cat"
                          width="228"
                          height="228"
                          className="m-0"
                        />
                      </div>
                      <div className="product_content">
                        <h4 className="group-hover/item:text-primary ">
                          {item.name}
                        </h4>
                        <div class="product_item_price text-left">
                          <span class="price_new text-primary">23,040৳</span>{' '}
                          <span class="price_old">24,000৳</span>
                        </div>
                      </div>
                    </div>
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

export default Product;
