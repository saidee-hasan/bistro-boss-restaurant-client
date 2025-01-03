import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";

// Import modules from Swiper
import { FreeMode, Pagination } from 'swiper/modules';

function Category() {
  return (
    <div className=''>
      <h1 className='md:text-5xl text-center font-bold'>Order Online</h1>
      <hr />
      <br />
      <br />

      <Swiper
        spaceBetween={30}  // Space between slides
        freeMode={true}  // Allow free sliding
        pagination={{ clickable: true }}  // Enable clickable pagination
        modules={[FreeMode, Pagination]}  // Import necessary modules
        className="mtSwiper mb-24"
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide per view on mobile
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // 2 slides per view on tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4, // 4 slides per view on large screens
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="Salads" className="w-full h-full object-cover" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2} alt="Pizza" className="w-full h-full object-cover" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="Soup" className="w-full h-full object-cover" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soup</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} alt="Desserts" className="w-full h-full object-cover" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img5} alt="Salads" className="w-full h-full object-cover" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Category;
