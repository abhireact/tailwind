import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../common/Footer";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { Blog2 } from "./Blog2";
import { Contact } from "./Contact";
import Contact2 from "./Contact2";
import { Portfolio } from "./Portfolio";
import { Servicessss } from "./Servicessss";
import { Testimonials } from "./Testimonials";
import Automobile from "./Automobile";
import Aviation from "./Aviation";
import It from "./It";
import Healthcare from "./Healthcare";
import Education from "./Education";
import Bfsi from "./Bfsi";
import Careers from "./Careers";
import Oracle from "./Enterprise/Oracle";
import Salesforce from "./Enterprise/Salesforce";
import Sap from "./Enterprise/Sap";
import Agile from "./Application/Agile";
import Devops from "./Application/Devops";
import Microservices from "./Application/Microservices";
import Qa from "./Application/Qa";
import Servicedesk from "./Lifecycle/Servicedesk";
import Content from "./Lifecycle/Content";
import Management from "./Lifecycle/Management";
import Mservises from "./Lifecycle/Mservises";
import Finance from "./Lifecycle/Finance";
import Rims from "./Lifecycle/Rims";
import Thirdparty from "./Lifecycle/Thirdparty";
import CloudServices from "./Cloud/CloudServices";
import PrivateCloud from "./Cloud/PrivateCloud";
import Engineering from "./Engineering/Engineering";
import Staffing from "./Staffing/Staffing";
import Hospitality from "./SolutionProduct/Hospitality";
import Scm from "./SolutionProduct/Scm";
import Mcms from "./SolutionProduct/Mcms";
import Affiliation from "./AboutUs/Affiliation";
import Business from "./AboutUs/Business";
import Leadership from "./AboutUs/Leadership";
import Locationcontact from "./AboutUs/Locationcontact";
import Locationoffices from "./AboutUs/Locationoffices";
import Partners from "./AboutUs/Partners";
import Whatwestandsfor from "./AboutUs/Whatwestandsfor";
import WhoWeAre from "./AboutUs/WhoWeAre";
import VendormanagementSystem from "./Solutions/vendor_management_system";
import Serviceprocurment from "./Solutions/services_procurement";
import DirectSourcing from "./Solutions/direct_sourcing";
import TotalTallentIntelligence from "./Solutions/total_talent_intelligence";
import ManagedServiceprovider from "./lastServices/managed_service_provider";
import EmployeOfRecord from "./lastServices/employe_of_record";
import StrategicAdvisory from "./lastServices/strategic_advisory";
import DiversityEquityInclusion from "./lastServices/diversity_equity_inclusion";
import VenderManagementSystem from "./workforce_services/vender_management_solution";
export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/servicessss" component={Servicessss} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/blog2" component={Blog2} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact2" component={Contact2} />
          <Route exact path="/automobile" component={Automobile} />
          <Route exact path="/aviation" component={Aviation} />
          <Route exact path="/it" component={It} />
          <Route exact path="/healthcare" component={Healthcare} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/bfsi" component={Bfsi} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/oracle" component={Oracle} />
          <Route exact path="/salesforce" component={Salesforce} />
          <Route exact path="/sap" component={Sap} />
          <Route exact path="/agile" component={Agile} />
          <Route exact path="/devops" component={Devops} />
          <Route exact path="/microservices" component={Microservices} />
          <Route exact path="/qa" component={Qa} />
          <Route exact path="/servicedesk" component={Servicedesk} />
          <Route exact path="/content" component={Content} />
          <Route exact path="/management" component={Management} />
          <Route exact path="/mservises" component={Mservises} />
          <Route exact path="/finance" component={Finance} />
          <Route exact path="/rims" component={Rims} />
          <Route exact path="/thirdparty" component={Thirdparty} />
          <Route exact path="/cloudservices" component={CloudServices} />
          <Route exact path="/privatecloud" component={PrivateCloud} />
          <Route exact path="/engineering" component={Engineering} />
          <Route exact path="/staffing" component={Staffing} />
          <Route exact path="/hospitality" component={Hospitality} />
          <Route exact path="/scm" component={Scm} />
          <Route exact path="/mcms" component={Mcms} />
          <Route exact path="/affiliation" component={Affiliation} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/leadership" component={Leadership} />
          <Route exact path="/locationcontact" component={Locationcontact} />
          <Route exact path="/locationoffices" component={Locationoffices} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/whatwestandsfor" component={Whatwestandsfor} />
          <Route exact path="/whoweare" component={WhoWeAre} />
          <Route
            exact
            path="/vendormanagementsystem"
            component={VendormanagementSystem}
          />
          <Route
            exact
            path="/serviceprocurment"
            component={Serviceprocurment}
          />
          <Route exact path="/directsoursing" component={DirectSourcing} />
          <Route
            exact
            path="/totaltalentintelligence"
            component={TotalTallentIntelligence}
          />
          <Route
            exact
            path="/ManagedServiceprovider"
            component={ManagedServiceprovider}
          />
          <Route exact path="/EmployeOfRecord" component={EmployeOfRecord} />
          <Route
            exact
            path="/StrategicAdvisory"
            component={StrategicAdvisory}
          />
          <Route
            exact
            path="/DiversityEquityInclusion"
            component={DiversityEquityInclusion}
          />
        </Switch>
        <Route
          exact
          path="/vender_management_system"
          component={VenderManagementSystem}
        />

        <Contact />
        <Footer />
      </Router>
    </>
  );
};
