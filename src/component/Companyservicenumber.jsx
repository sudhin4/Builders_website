import Numbercounter from "./Numbercounter";
import '../component/Fullpage.css'
function Companyservicenumber(){
    return(
        <>
        
        <div className="companyservicenumberdivvv">
            <div className="projectsnumbersection">
                <Numbercounter target={120}/>
                <h4 className="headingfortotalprojectdone">Total Clients</h4>
            </div>
            <div className="projectsnumbersection">
                <Numbercounter target={720}/>
                <h4 className="headingfortotalprojectdone">Total Employees</h4>
            </div>
            <div className="projectsnumbersection">
                <Numbercounter target={450}/>
                <h4 className="headingfortotalprojectdone">Total projects done</h4>
            </div>
        </div>
        </>
    )
}
export default Companyservicenumber;