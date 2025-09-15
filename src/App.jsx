import Aboutussection from "./component/Aboutus";
import CompanyPartners, { MobileviewCompanypartners } from "./component/CompanyPartner";
import Companyservicenumber from "./component/Companyservicenumber";
import Contactsection from "./component/Contactsection";
import Footer from "./component/footer";
import Header from "./component/Header";
import Lastproject from "./component/LastProjects";
import Mainsection from "./component/Mainsection";
import Numbercounter from "./component/Numbercounter";
import Rain from "./component/Rain";
import Roadmap from "./component/Roadmapsection";
import Services, { Mobileviewservice } from "./component/Services";
import Testimonialcontent, { TestimonialcontentMObileview } from "./component/Testimonaldetails";

function App(){
  return(
    <>
  
    <Header/>
    <Mainsection/> 
    <Companyservicenumber/>
    <div className="laptopviewdiv">
      <CompanyPartners/>
    </div>
    <div className="mobileviewdivv">
      <MobileviewCompanypartners/>
    </div>
    


    <div className="laptopviewdiv">
      <Services/>
    </div>
    <div className="mobileviewdivv">
      <Mobileviewservice/>
    </div>
    
    <Roadmap/>

    <div className="laptopviewdiv">
      <Testimonialcontent/>
    </div>
    <div className="mobileviewdivv">
      <TestimonialcontentMObileview/>
    </div>
    
    <Lastproject/>
    <Aboutussection/>
    <Contactsection/>
    <Footer/>
    </>
  )
}

export default App;