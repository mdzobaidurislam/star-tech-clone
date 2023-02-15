import React, {useEffect, useRef, useState} from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

export default function ShopScreen() {
  const initialMin = 2500;
  const initialMax = 7500;
  const min = 0;
  const max = 10000;
  const step = 100;
  const priceCap = 1000;

  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const handleMin = e => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };
  const handleMax = e => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };
  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + '%';
    progressRef.current.style.right = step - (maxValue / max) * step + '%';
  }, [maxValue, minValue]);

  return (
    <Layout title="Shop">
      <Breadcrumb />
      <div className="shop_page px-[20px] pt-[20px] pb-[80px]">
        <div className="shop_inner flex items-center gap-5">
          <div className="sidebar flex-[0_0_25%]">
            <div className="sidebar_card bg-[#ffffff] rounded-lg m-h-64 py-[30px]  shadow-sm mb-[30px] ">
              <div className="s_card_box relative pb-[30px]">
                <div className="s_header border-b-[1px] px-[30px] border-[#ddd]">
                  <h3 className="text-[20px] font-[500] text-[#000]  pb-[10px]">
                    Price Range
                  </h3>
                </div>
                <div className="s_content px-[30px]">
                  <div className="price_range">
                    <div className="flex justify-center items-center my-6 gap-5">
                      <div className="rounded-md">
                        <span className="p-2 font-semibold">min</span>
                        <input
                          type="number"
                          className="w-24 rounded-md border border-[#ddd]"
                          value={minValue}
                          onChange={e => setMinValue(e.target.value)}
                        />
                      </div>
                      <div className=" font-semibold text-lg ">-</div>
                      <div className="rounded-md">
                        <span className="p-2 font-semibold">Max</span>
                        <input
                          type="number"
                          className="w-24 rounded-md border border-[#ddd]"
                          value={maxValue}
                          onChange={e => setMaxValue(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* slider */}
                    <div className="mb-4">
                      <div className="slider relative h-1 rounded-md bg-primary w-full">
                        <div
                          className=" progress absolute h-1 rounded bg-light w-full "
                          ref={progressRef}></div>
                      </div>

                      <div className="range-input relative">
                        <input
                          type="range"
                          className="range-min absolute w-full -top-1 left-0 h-1  appearance-none pointer-events-none border-0"
                          min={min}
                          max={max}
                          step={step}
                          value={minValue}
                          onChange={handleMin}
                        />
                        <input
                          type="range"
                          className="range-max absolute w-full -top-1 h-1  appearance-none pointer-events-none border-0"
                          min={min}
                          max={max}
                          step={step}
                          value={maxValue}
                          onChange={handleMax}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products flex-[0_0_75%]">
            <h1>Product</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
