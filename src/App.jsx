import Aboutussection from "./component/Aboutus";
import CompanyPartners from "./component/CompanyPartner";
import Companyservicenumber from "./component/Companyservicenumber";
import Contactsection from "./component/Contactsection";
import Footer from "./component/footer";
import Header from "./component/Header";
import Lastproject from "./component/LastProjects";
import Mainsection from "./component/Mainsection";
import Numbercounter from "./component/Numbercounter";
import Rain from "./component/Rain";
import Roadmap from "./component/Roadmapsection";
import Services from "./component/Services";
import Testimonialcontent from "./component/Testimonaldetails";

function App(){
  return(
    <>
  <Rain dropCount={200}/>
    <Header/>
    <Mainsection/> 
    <Companyservicenumber/>
    <CompanyPartners/>
    <Services/>
    <Roadmap/>
    <Testimonialcontent/>
    <Lastproject/>
    <Aboutussection/>
    <Contactsection/>
    <Footer/>
    </>
  )
}

export default App;