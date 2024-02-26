import Image from 'next/image';
import BannerSlider from './BannerSlider';

export default function Banner() {
  return (
    <div className="banner_section py-[40px] px-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-8 gap-5">
        <div className="b_slider col-span-1 lg:col-span-6">
          <BannerSlider />
        </div>
        <div className="banner_right col-span-2">
          <div className="compare_product p-[20px] bg-[#ffe8a1] mb-[20px] ">
            <h5 className="text-[#000] font-[600] text-center">
              Compare Products
            </h5>
            <p className="text-center">Choose Two Products to Compare</p>
            <div className="div">
              <div class="search">
                <input
                  type="text"
                  name="search"
                  placeholder="Search and Select Product"
                  autocomplete="off"
                  class="focus:outline-none w-full p-[10px]"
                />
                <button class="absolute top-[20px] right-5 text-[20px] opacity-[.5]">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <button
              type="button"
              class="ctm_out_btn outline-0 hover:bg-secondary hover:text-[#fff] w-full ">
              View Comparison
            </button>
          </div>
          <div className="ads">
            <Image
              src="/assets/slider/ads.webp"
              alt="ads"
              width="300"
              height="193"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
