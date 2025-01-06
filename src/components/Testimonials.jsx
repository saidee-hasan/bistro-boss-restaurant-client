import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ReactStars from 'react-rating-stars-component';

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className='m-5'>
      <SectionTitle subHeading={"What Our Clients Say"} heading={"Testimonials"} />
      <div className="max-w-screen-lg mx-auto"> {/* Center the Swiper */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
        >
          {reviews.map(({ name, details, rating }, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-4 text-center">
                <div className="flex justify-center mb-2">
                  <ReactStars
                    count={5}
                    value={rating}
                    edit={false}
                    size={44}
                    activeColor="#ffd700"
                    aria-label={`Rating for ${name}`}
                  />
                </div>
                <p className="text-lg mt-2">{details}</p>
                <h3 className='text-2xl text-orange-400 mt-2'>{name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;