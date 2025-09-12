import buildingimage from "../assets/Image/32509.png";
import '../component/Fullpage.css'

function Aboutussection() {
  return (
    <>
      <div className="fullaboutsectiondivvv">
        <div className="headingdivvv"><h2 className="headingforaboutusee">About us</h2></div>
        <div className="imageandcontentforaboutus">
          <img src={buildingimage} className="aboutusimageforsection" alt="" />
          <p className="paraforaboutussection">
            "Our construction company stands as a symbol of trust, quality, and
            innovation in the building industry. We specialize in delivering
            residential, commercial, and industrial projects that reflect
            precision, durability, and modern design. With a highly skilled
            team, advanced technology, and strong project management, we ensure
            every project is completed on time and within budget. Safety,
            sustainability, and customer satisfaction are at the heart of
            everything we do. From planning and design to execution and
            finishing, we provide end-to-end solutions that transform visions
            into reality, creating not just buildings, but lasting value for our
            clients."
          </p>
        </div>
      </div>
    </>
  );
}
export default Aboutussection;
