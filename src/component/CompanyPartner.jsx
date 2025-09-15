import image1 from "../assets/Image/PartnersImage/Image1.png";
import image2 from "../assets/Image/PartnersImage/image2.png";
import image3 from "../assets/Image/PartnersImage/image3.png";
import image4 from "../assets/Image/PartnersImage/image4.png";
import image5 from "../assets/Image/PartnersImage/image5.png";
import image6 from "../assets/Image/PartnersImage/image6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function CompanyPartners() {
  return (
    <>
      <div className="fullcompanypartnersDIvv">
        <div className="companypartnerheadingdivv">
          <h2 className="headingforcompanypartner">Our Company Partners</h2>
        </div>
        <div className="imgforcomapanypartnersdivvv">
          <img src={image1} alt="" className="imagetagourpartners imagee01" />
          <img src={image2} alt="" className="imagetagourpartners imagee02" />
          <img src={image3} alt="" className="imagetagourpartners imagee03" />
          <img src={image4} alt="" className="imagetagourpartners imagee04" />
          <img src={image5} alt="" className="imagetagourpartners imagee05" />
          <img src={image6} alt="" className="imagetagourpartners imagee06" />
        </div>
      </div>
    </>
  );
}

export default CompanyPartners;

export function MobileviewCompanypartners() {
  return(
    <>
    <div className="fullcompanypartnersDIvv">
    <div className="companypartnerheadingdivv">
      <h2 className="headingforcompanypartner mobileviewheaidngpartners">Our Company Partners</h2>
    </div>
    <div className="imgforcomapanypartnersdivvv">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        slidesPerGroup={1}
      >
        <SwiperSlide>
          <img src={image1} alt="" className="imagetagourpartners mobileviewpartnerss imagee01" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" className="imagetagourpartners mobileviewpartnerss imagee02" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" className="imagetagourpartners mobileviewpartnerss imagee03" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" className="imagetagourpartners mobileviewpartnerss imagee04" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" className="imagetagourpartners mobileviewpartnerss imagee05" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="" className="imagetagourpartners mobileviewpartnerss imagee06" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
    </>
  )
  
}
