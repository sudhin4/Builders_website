import Image23 from "../assets/Image/Testimonial/Image1.jpg";
import "../component/Fullpage.css";

function TestimonialComponent({ Image, Name, Details }) {
  return (
    <>
      <div className="fulltestimonialsectiondivv">
        <img
          src={Image ? Image : Image23}
          alt=""
          className="imagefortestimonial"
        />
        <div className="fullcontentandheadingtagdivvv">
          <h3 className="Namefortestimonialheadingtag">
            {Name ? Name : "Sudhin"}
          </h3>
          <p className="discriptionfortestimonailtag">
            {Details
              ? Details
              : "Loremsssd sdsdsd sdskdi teh ehehe ehreher erehre reher reh"}
          </p>
        </div>
      </div>
    </>
  );
}
export default TestimonialComponent;
