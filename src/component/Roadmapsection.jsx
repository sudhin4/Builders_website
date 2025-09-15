import '../component/Fullpage.css'
import Roadmapimage from'../assets/Image/Roadmapfordevelopment.png'
import Tools from '../assets/Image/Tools.png'
import Hammer from '../assets/Image/Hammer.png'
import Mobileviewimage from '../assets/Image/mobileviewimage.png'

function Roadmap(){
    return(
        <>
        <div className='fullRoadmapsectiondivvv'>
            <h2 className='headingfor_roadmapsection'>Roadmap to Build a Building</h2>
            <div className='laptopviewdiv'><img src={Roadmapimage} alt="" className='Roadmapimagetagee' /></div>
            <div className='mobileviewdivv'><img src={Mobileviewimage} alt="" className='Roadmapimagetagee' /></div>
            
        </div>
        <img src={Tools} className='toolsimagepng' alt="" />
        <img src={Hammer} className='HammerImagepng' alt="" />
        
        </>
    )
}
export default Roadmap;