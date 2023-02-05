import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Navigation} from 'swiper';
import Image from 'next/image';
export default function BannerSlider() {
  const sliders = [
    {
      _id: 1,
      image: '/assets/slider/1.webp',
    },
    {
      _id: 2,
      image: '/assets/slider/2.webp',
    },
    {
      _id: 3,
      image: '/assets/slider/3.webp',
    },
    {
      _id: 4,
      image: '/assets/slider/4.webp',
    },
  ];
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {sliders.map(item => (
          <SwiperSlide key={item._id}>
            <Image
              src={item.image}
              alt="logo"
              width="982"
              height="500"
              className="slideClass"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
