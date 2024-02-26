import Image from 'next/image';
import React from 'react';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../../action/cartAction';
import Link from 'next/link';

const Product = ({products}) => {
  // console.log(products);

  const dispatch = useDispatch();

  const addToCartHandler = async product => {
    dispatch(ADD_TO_CART(product));
  };
  return (
    <div className="product_section">
      <div className=" px-[100px]">
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
          {products.length > 0 ? (
            products.map(item => (
              <>
                <div key={item._id}>
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
                          <Link href={`/product/${item.slug}`} legacyBehavior>
                            <a>
                              <h4 className="group-hover/item:text-primary ">
                                {item.name}
                              </h4>
                            </a>
                          </Link>

                          <div class="product_item_price text-left">
                            <span class="price_new text-primary">
                              {item.price}৳
                            </span>{' '}
                            <span class="price_old">24,000৳</span>
                          </div>
                          <div>
                            <button
                              className="primary-button"
                              type="button"
                              onClick={() => addToCartHandler(item)}>
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            ))
          ) : (
            <h1>No products</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
