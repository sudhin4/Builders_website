import TestimonialComponent from "./Testimonialcomponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import image1 from '../assets/Image/Testimonial/Image1.jpg'
import image2 from '../assets/Image/Testimonial/Image2.jpg'
import image3 from '../assets/Image/Testimonial/Image3.jpg'
import image4 from '../assets/Image/Testimonial/Image4.jpg'
import image5 from '../assets/Image/Testimonial/Image5.png'
import image6 from '../assets/Image/Testimonial/Image6.png'


function Testimonialcontent() {
  return (
    <>
      <div className="heaidngfortestimonialheading">
        <h1 className="headingfortestimoniallll">Testimonial</h1>
      </div>
      <div className="fullswipersectiondivvv">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          slidesPerGroup={1}
        >
          <SwiperSlide>
            <TestimonialComponent Image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image6} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Testimonialcontent;

export function TestimonialcontentMObileview(){
  return(
    <>
    <div className="heaidngfortestimonialheading">
        <h1 className="headingfortestimoniallll">Testimonial</h1>
      </div>
      <div className="fullswipersectiondivvv">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          slidesPerGroup={1}
        >
          <SwiperSlide>
            <TestimonialComponent Image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent Image={image6} />
          </SwiperSlide>
        </Swiper>
      </div>
    
    
    </>
  )
}
