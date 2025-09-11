import Image1 from "../assets/Image/ServiceImage/Airport Image.jpg";
import Image2 from "../assets/Image/ServiceImage/Railway station Image.jpg";
import Image3 from "../assets/Image/ServiceImage/Bridge Image.png";
import Image4 from "../assets/Image/ServiceImage/Building6.jpg";
import Image5 from "../assets/Image/ServiceImage/factories image.png";
import Image6 from "../assets/Image/ServiceImage/Hospitalimage.png";
import Image7 from "../assets/Image/ServiceImage/Building.jpg";
import "../component/Fullpage.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Services() {
  const settingforcursor = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className="fullservicesectiondivv">
        <div className="headingforserviceswedooo">
          <h1 className="headingforthewwdsection">What we are Build ?</h1>
        </div>
        <div className="fullimageand_sectiondivforbuildingsection">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={5}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            slidesPerGroup={1}
          >
            <SwiperSlide className="imageandheadingsection030303">
              <img
                src={Image1}
                alt="Airport"
                className="imageforserviceimage01 imageodd"
              />
              <h2 className="labelfortheserviceimage">Airport</h2>
            </SwiperSlide>
            <SwiperSlide className="imageandheadingsection030303">
              <img
                src={Image2}
                alt="Railway"
                className="imageforserviceimage01 imageeven"
              />
              <h2 className="labelfortheserviceimage">Railway</h2>
            </SwiperSlide>
            <SwiperSlide className="imageandheadingsection030303">
              <img
                src={Image3}
                alt="Bridge"
                className="imageforserviceimage01 imageodd"
              />
              <h2 className="labelfortheserviceimage">Bridges</h2>
            </SwiperSlide>
            <SwiperSlide className="imageandheadingsection030303">
              <img
                src={Image4}
                alt="Building"
                className="imageforserviceimage01 imageeven"
              />
              <h2 className="labelfortheserviceimage">Companies</h2>
            </SwiperSlide>
            <SwiperSlide className="imageandheadingsection030303">
              <img
                src={Image5}
                alt="Factory"
                className="imageforserviceimage01 imageodd"
              />
              <h2 className="labelfortheserviceimage">Factories</h2>
            </SwiperSlide>
            <SwiperSlide className="imageandheadingsection030303">
              <img
                src={Image6}
                alt="Hospital"
                className="imageforserviceimage01 imageeven"
              />
              <h2 className="labelfortheserviceimage">Hospitals</h2>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="custom-pagination"></div>
      </div>
    </>
  );
}

export default Services;
