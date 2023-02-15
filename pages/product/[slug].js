import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../../action/cartAction';

export default function ProductSingleScreen({product}) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(ADD_TO_CART(product));
  };
  return (
    <Layout title="Motorola Moto G31 Smartphone (6/128GB)">
      <div className="product_single px-[20px] py-[20px] ">
        {/* Breadcrumb start */}
        <div className="b_header flex flex-wrap gap-2 items-center mb-[10px] ">
          <span className="text-[14px]">
            <i class="fa-solid fa-house-chimney"></i>
          </span>
          <span>/</span>
          <Link href="/desktop" legacyBehavior>
            <a className="text-[14px]">Desktop</a>
          </Link>
        </div>
        {/* Breadcrumb end */}

        <div className="grid md:grid-cols-5 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
            />
          </div>
          <div className="md:col-span-3">
            <div className="product_content">
              <h2 className="text-secondary p-[10px_10px] text-[22px] font-[500] ">
                {product.name}
              </h2>
              <table className="product-info-table">
                <tbody className="flex">
                  <tr className="flex">
                    <td className="product-info-label">Price:</td>
                    <td className="product-info-data product-price">19,999৳</td>
                  </tr>
                  <tr className="flex">
                    <td className="product-info-label">Regular Price:</td>
                    <td className="product-info-data product-price">19,999৳</td>
                  </tr>
                  <tr className="flex">
                    <td className="product-info-label">Status:</td>
                    <td className="product-info-data product-price">19,999৳</td>
                  </tr>
                  <tr className="flex">
                    <td className="product-info-label">Product Code:</td>
                    <td className="product-info-data product-price">
                      13484304
                    </td>
                  </tr>
                  <tr className="flex">
                    <td className="product-info-label">Brand:</td>
                    <td className="product-info-data product-price">
                      Motorola
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="short-description mt-[10px] mb-[30px]">
                <h2 className="text-[#00] p-[10px_0px] text-[22px] font-[500] ">
                  Key Features
                </h2>
                <ul>
                  <li>Model: Moto G31</li>
                  <li>Display: 6.4 FHD+ (2400x1080) OLED</li>
                  <li>Processor: Mediatek MT6769Z Helio G85 (12nm)</li>
                  <li>Camera: Triple 50+8+2 MP on Rear, 13MP Selfie</li>
                  <li>Features: Side Mounted Fingerprint, 20W Fast Charging</li>
                  <li class="view-more" data-area="specification">
                    View More Info
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <button className="ctm_btn" onClick={addToCartHandler}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-5">
        <div className="px-[20px] py-[20px] flex-[0_0_75%]">
          <div className="product_description  ">
            <div className="tab">
              <button>Specification</button>
              <button>Description</button>
              <button>Questions (0)</button>
              <button>Reviews (1)</button>
            </div>

            <div className="tab_Specification bg-[#ffffff] rounded-lg   shadow-sm m-4">
              <div class="section-head">
                <h2>Specification</h2>
              </div>
              <table
                class="data-table flex-table"
                cellpadding="0"
                cellspacing="0">
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Display
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Size</td>
                    <td class="value">6.4</td>
                  </tr>
                  <tr>
                    <td class="name">Type</td>
                    <td class="value">OLED</td>
                  </tr>
                  <tr>
                    <td class="name">Resolution</td>
                    <td class="value">FHD+ (2400x1080)</td>
                  </tr>
                  <tr>
                    <td class="name">Refresh Rate</td>
                    <td class="value">60 Hz</td>
                  </tr>
                  <tr>
                    <td class="name">Features</td>
                    <td class="value">
                      82.7% screen-to-body ratio
                      <br />
                      20:9 ratio ~411 ppi density
                    </td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Processor
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Chipset</td>
                    <td class="value">Mediatek MT6769Z Helio G85 (12nm)</td>
                  </tr>
                  <tr>
                    <td class="name">CPU Type</td>
                    <td class="value">Octa-Core</td>
                  </tr>
                  <tr>
                    <td class="name">CPU Speed</td>
                    <td class="value">
                      2x2.0 GHz Cortex-A75 &amp; 6x1.8 GHz Cortex-A55
                    </td>
                  </tr>
                  <tr>
                    <td class="name">GPU</td>
                    <td class="value">Mali-G52 MC2</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Memory
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">RAM</td>
                    <td class="value">6GB</td>
                  </tr>
                  <tr>
                    <td class="name">Internal Storage</td>
                    <td class="value">128GB</td>
                  </tr>
                  <tr>
                    <td class="name">Card Slot</td>
                    <td class="value">MicroSD Up to 1TB</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Rear Camera
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Resolution</td>
                    <td class="value">
                      50MP f/1.8 wide + 8MP f/2.2 ultrawide + 2MP f/2.4 macro
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Features</td>
                    <td class="value">
                      LED flash, panorama, HDR, PDAF, 118˚ ultrawide
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Video Recording</td>
                    <td class="value">1080p@30fps</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Front Camera
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Resolution</td>
                    <td class="value">13MP f/2.2 wide</td>
                  </tr>
                  <tr>
                    <td class="name">Video Recording</td>
                    <td class="value">1080p@30fps</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Audio
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Speaker</td>
                    <td class="value">Loudspeaker</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Network &amp; Connectivity
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">SIM</td>
                    <td class="value">Hybrid Dual Nano SIM</td>
                  </tr>
                  <tr>
                    <td class="name">Network</td>
                    <td class="value">2G, 3G, 4G</td>
                  </tr>
                  <tr>
                    <td class="name">Wi-Fi</td>
                    <td class="value">
                      Wi-Fi 802.11 a/b/g/n/ac | 2.4 GHz &amp; 5 GHz | Wi-Fi
                      hotspot
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Bluetooth</td>
                    <td class="value">Bluetooth 5.0, A2DP, LE</td>
                  </tr>
                  <tr>
                    <td class="name">GPS</td>
                    <td class="value">
                      GPS, A-GPS, LTEPP, SUPL, GLONASS, Galileo
                    </td>
                  </tr>
                  <tr>
                    <td class="name">NFC</td>
                    <td class="value">Yes</td>
                  </tr>
                  <tr>
                    <td class="name">USB</td>
                    <td class="value">USB Type-C 2.0</td>
                  </tr>
                  <tr>
                    <td class="name">OTG</td>
                    <td class="value">Yes</td>
                  </tr>
                  <tr>
                    <td class="name">Audio Jack</td>
                    <td class="value">3.5mm Jack</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      OS
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Operating System</td>
                    <td class="value">Android 11</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Features
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Fingerprint</td>
                    <td class="value">Side-mounted</td>
                  </tr>
                  <tr>
                    <td class="name">Sensors</td>
                    <td class="value">
                      Proximity sensor, Accelerometer, Ambient Light sensor, SAR
                      sensor, Gyroscope, E-Compass
                    </td>
                  </tr>
                  <tr>
                    <td class="name">IP Rating</td>
                    <td class="value">N/A</td>
                  </tr>
                  <tr>
                    <td class="name">Other Features</td>
                    <td class="value">Water-repellent design</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Battery
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Type</td>
                    <td class="value">
                      Lithium-polymer 5000 mAh non-removable
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Fast Charging</td>
                    <td class="value">20W Fast Charging</td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Physical specification
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Dimension</td>
                    <td class="value">161.89 x 73.87 x 8.55 mm</td>
                  </tr>
                  <tr>
                    <td class="name">Weight</td>
                    <td class="value">181 g</td>
                  </tr>
                  <tr>
                    <td class="name">Body Material</td>
                    <td class="value">Plastic</td>
                  </tr>
                  <tr>
                    <td class="name">Colors</td>
                    <td class="value">
                      Mineral Grey
                      <br />
                      Baby Blue
                    </td>
                  </tr>{' '}
                </tbody>
                <thead>
                  <tr>
                    <td class="heading-row" colspan="3">
                      Warranty Information
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">Warranty</td>
                    <td class="value">
                      1 Year Official Warranty Motorola Care
                    </td>
                  </tr>{' '}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="relative_product flex-[0_0_25%]   pr-[20px] ">
          <div className="relative_area bg-[#ffffff] rounded-lg  p-[20px] shadow-sm">
            <h2>Relative product</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {params} = context;
  const {slug} = params;
  const {data} = await axios.get(
    `${process.env.BASE_URL}/api/products/${slug}`,
  );

  return {
    props: {
      product: data,
    },
  };
}
