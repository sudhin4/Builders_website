import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";




function Footer(){

    const timesection = new Date().getFullYear()
    return(
        <>
        <div className="fullfootersection">
          <div className="footersectionfulldiv">
            <h2 className="headingfrothelogobuilders">Builders</h2>
            <div className="logoandidname">
                <MdOutlinePhone className="phonelogo contactlogoooo"/>
               <a href="tel:+916383965891"><h2 className="mobilenumberforfooter contactdetailsfooter">+91 6383965891</h2></a> 
            </div>
            <div className="logoandidname">
                <MdOutlineEmail className="phonelogo contactlogoooo"/>
                <a href="mailto:sudhinnaveen38@gmail.com"><h2 className="mobilenumberforfooter contactdetailsfooter">sudhinnaveen38@gmail.com</h2></a>
            </div>
            <div className="logoandsocialmediaideadiv">
                <FaInstagram className="logoforsocialmedia"/>
               <a href="http://www.linkedin.com/in/suthin-k-s-876402281"><FaLinkedin className="logoforsocialmedia"/></a> 
                <BsTwitterX className="logoforsocialmedia"/>
                <FaFacebookSquare className="logoforsocialmedia"/>
            </div>
        </div>
        <div className="anotherroutesectionfooter">
            <h3 className="footeranohterrouteheading">Our Projects</h3>
            <h3 className="footeranohterrouteheading">About us</h3>
            <h3 className="footeranohterrouteheading">Contact us</h3>
        </div>
        <div className="copyrightsfooter">
            <FaRegCopyright className="copyrightfont"/>
            <h3 className="allrightreserveredheading">All rights are received {timesection}</h3>
        </div>  
        </div>
        
        </>
    )
}
export default Footer;