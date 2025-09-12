import buildingimage1 from '../assets/Image/LastProjects/Building.jpg'
import buidlingimage2 from '../assets/Image/LastProjects/building3.jpg'
import buildingimage3 from '../assets/Image/LastProjects/Building5.jpg'
import buildingimage4 from '../assets/Image/LastProjects/Building6.jpg'
import buildingimage5 from '../assets/Image/LastProjects/building7.jpg'
import buildingimage6 from '../assets/Image/LastProjects/Bridge Image.png'
import buildingimage7 from '../assets/Image/LastProjects/House Image.jpg'
import buildingimage8 from '../assets/Image/LastProjects/factories image.jpg'
import buildingimage9 from '../assets/Image/LastProjects/Architecture Building.png'
import '../component/Fullpage.css'

function Lastproject(){
    return(
        <>
        <div className='fulllastprojectsectiondivvvvv'>
            <div className='lastprojectheadingsectiondiv'>
        <h1 className='headingforlastproject'>Last Projects</h1>
        </div>
        <div className="fulllastprojectsectiondivvv">
            <img src={buildingimage1} alt="" className='image1forlastprojectsection image10101 ' />
            <img src={buidlingimage2} alt="" className='image1forlastprojectsection image10102 s01even' />
            <img src={buildingimage3} alt="" className='image1forlastprojectsection image10103 ' />
            <img src={buildingimage4} alt="" className='image1forlastprojectsection image10104 s01even' />
            <img src={buildingimage5} alt="" className='image1forlastprojectsection image10105' />
            <img src={buildingimage6} alt="" className='image1forlastprojectsection image10106 s01even' />
            <img src={buildingimage7} alt="" className='image1forlastprojectsection image10107' />
            <img src={buildingimage8} alt="" className='image1forlastprojectsection image10108 s01even' />
            <img src={buildingimage9} alt="" className='image1forlastprojectsection image10109' />
        </div>
        </div>
        
        </>
    )
}

export default Lastproject;