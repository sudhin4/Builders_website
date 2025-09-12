import CompanyPartners from "./component/CompanyPartner";
import Companyservicenumber from "./component/Companyservicenumber";
import Header from "./component/Header";
import Lastproject from "./component/LastProjects";
import Mainsection from "./component/Mainsection";
import Numbercounter from "./component/Numbercounter";
import Roadmap from "./component/Roadmapsection";
import Services from "./component/Services";
import Testimonialcontent from "./component/Testimonaldetails";

function App(){
  return(
    <>
    <Header/>
    <Mainsection/> 
    <Companyservicenumber/>
    <CompanyPartners/>
    <Services/>
    <Roadmap/>
    <Testimonialcontent/>
    <Lastproject/>
    </>
  )
}

export default App;