import contactimage from '../assets/Image/Contactimage.png'
import '../component/Fullpage.css'
function Contactsection(){
    return(
        <>
        <div className="fullcontactsectiondivvv">
            <div className="headingforthedivvvconatact">
                <h1 className="contactheading">Contact-us</h1>
            </div>
            <div className="contentforthecontactsection">
                <img src={contactimage} className="imageforcontactsection" alt="" />
                <div className="inputsectionforcontactdiv">
                    <label htmlFor="" className="labelforcontact">Enter the Name</label>
                    <input type="text" className="inputfornamedetails nameinputtt" name="" id="" />
                    <label htmlFor="" className="labelforcontact">Enter the Mobile Number</label>
                    <input type="number" className="inputfornamedetails mobilenumberinputtt" name="" id="" />
                    <label htmlFor="" className="labelforcontact">Description</label>
                    <input type="text" className="inputfornamedetails discrptioninputtt" name="" id="" />
                    <button className='submitbtnforcontactsectionnn'><b>Submit</b></button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contactsection;