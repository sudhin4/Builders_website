import Houseimage1 from '../assets/Image/New3dimage.png';
import Lottie from 'lottie-react'
import Animationdata from '../assets/Lottiefiles/FrontpageAnimation.json'
function Mainsection(){
    return(
        <>
        <div className="mainsectiondivv">
            <div className="paragraphsectiondivvv">
                <h1 className="mainheadingg">Let’s Build Your  <b className='bolddream'>“Dream”</b> Together</h1>
                <p className="mainparasectionpara">"Building dreams with strength, precision, and trust—our construction company delivers lasting quality and innovation for every project."</p>
                <button className="getquotesectionbtn">Get Details</button>
            </div>
            <div className="imgsectiondivv">
                <Lottie 
                animationData={Animationdata}
                loop={true}
                autoplay={true}
                style={{height:400,width:400}}

                />
            </div>
        </div>
        
        </>
    )
}
export default Mainsection;