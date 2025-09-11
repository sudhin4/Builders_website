import CompanyPartners from "./component/CompanyPartner";
import Header from "./component/Header";
import Mainsection from "./component/Mainsection";
import Roadmap from "./component/Roadmapsection";
import Services from "./component/Services";

function App(){
  return(
    <>
    <Header/>
    <Mainsection/>
    <CompanyPartners/>
    <Services/>
    <Roadmap/>
    </>
  )
}

export default App;