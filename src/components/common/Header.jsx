import { Link } from "react-router-dom";
// import { navlink } from "../data/dummydata"
import Enterprices from "./Enterprise-Software.png";
import Lifecycle from "./Lifecycle.png";
import Application from "./Application.png";
import Cloud from "./Cloud.png";
import Engineering from "./Engineering.png";
import staffing from "./staffing.png";
import Automobile from "./Automobile.png";
import bfsi from "./bfsi.png";
import it from "./it.png";
import solution from "./solution.png";
import leadership from "./Leadership.png";
import whatwestandfor from "./what-we-stand-for.png";
import business from "./business.png";
import affiliation from "./affiliation.png";
import location from "./Location.png";
import partners from "./Partners.png";
import whoweare from "./who-we-are.png";

import logo from "../data/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SchoolIcon from "@mui/icons-material/School";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import "./Header.css"
export const Header = () => {
  // const [responsive, setResponsive] = useState(false)
  window.onscroll = function () {};
  return (
    <>
      <nav id="menu1">
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img className="h-10 bg-none" src={logo} alt="MINDCOM" />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              {/* <i className="fas fa-times"></i> */}
              <CloseIcon /> <br />
            </label>
            <br />

            <li>
              <Link
                to="/"
                className="desktop-item  hover:text-lime-700 font-semibold pb-2"
              >
                INDUSTRIES
              </Link>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                INDUSTRIES
              </label>
              <div className="mega-box">
                <div className="content">
                  {/* <!-- <div className="row">
                <img src="img.jpg" alt="">
              </div> --> */}
                  <div className="row">
                    <Link className="h-12" to="/automobile">
                      {" "}
                      <header className="">
                        <div className="float-left w-12">
                          <img
                            className="h-9 w-9 bg-none float-left"
                            src={Automobile}
                            alt="MINDCOM"
                          />
                        </div>
                        Automobile
                      </header>
                    </Link>
                    <Link className="h-12" to="/aviation">
                      {" "}
                      <header className="">
                        <div className="float-left w-12 text-blue-500">
                          {/* <i
                            className="fa fa-plane fa-lg text-blue-500"
                            aria-hidden="true"
                          ></i> */}
                          <FlightTakeoffIcon />
                        </div>
                        Aviation
                      </header>
                    </Link>
                    <Link className="h-12" to="/it">
                      {" "}
                      <header className="">
                        <div className="float-left w-12">
                          <img
                            className="h-9 w-9 bg-none float-left"
                            src={it}
                            alt="MINDCOM"
                          />
                        </div>
                        IT
                      </header>
                    </Link>
                    <Link className="h-12" to="/bfsi">
                      {" "}
                      <header className="">
                        <div className="float-left w-12">
                          <img
                            className="h-9 w-9 bg-none float-left"
                            src={bfsi}
                            alt="MINDCOM"
                          />
                        </div>
                        BFSI
                      </header>
                    </Link>
                    <Link className="h-12" to="/education">
                      {" "}
                      <header className="">
                        <div className="float-left w-12 text-black">
                          <SchoolIcon />
                        </div>
                        Education
                      </header>
                    </Link>
                    <Link className="h-12" to="/healthcare">
                      {" "}
                      <header className="">
                        <div className="float-left w-12 text-red-500">
                          <HealthAndSafetyIcon />
                        </div>
                        Healthcare
                      </header>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                SERVICES
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                SERVICES
              </label>
              <div className="mega-box">
                <div className="content grid grid-cols-1 divide-y">
                  {/* <!-- <div className="row">
                <img src="img.jpg" alt="">
              </div> --> */}

                  <div className="row md:grid-cols-1 h-16">
                    <div>
                      <header className="">
                        <div className="float-left w-12 pt-2">
                          <img
                            className="h-8 w-8 bg-none float-left"
                            src={Enterprices}
                            alt="MINDCOM"
                          />
                        </div>{" "}
                        Enterprise
                      </header>
                      <ul className="mega-links pt-2">
                        <li>
                          <Link to="/oracle">Oracle</Link>
                        </li>
                        <li>
                          <Link to="/salesforce">Salesforce</Link>
                        </li>
                        <li>
                          <Link to="/sap">SAP</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row md:grid-cols-1 h-20">
                    <div>
                      <header className="">
                        <div className="float-left w-12 pt-2">
                          <img
                            className="h-8 w-8 bg-none float-left"
                            src={Application}
                            alt="MINDCOM"
                          />
                        </div>{" "}
                        Application
                      </header>
                      <ul className="mega-links pt-1">
                        <li>
                          <Link to="/agile">Agile</Link>
                        </li>
                        <li>
                          <Link to="/devops">DevOps</Link>
                        </li>
                        <li>
                          <Link to="/microservices">Microservices and API</Link>
                        </li>
                        <li>
                          <Link to="/qa">QA and Testing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row md:grid-cols-1 h-20">
                    <div>
                      <header className="">
                        <div className="float-left w-12 pt-1">
                          <img
                            className="h-10 w-10 bg-none float-left"
                            src={Lifecycle}
                            alt="MINDCOM"
                          />
                        </div>{" "}
                        Lifecycle Support
                      </header>
                      <ul className="mega-links pt-1">
                        <li>
                          <Link to="/servicedesk">Service Desk Support</Link>
                        </li>
                        <li>
                          <Link to="/management">Content Management</Link>
                        </li>
                        <li>
                          <Link to="/mservises">Managed Services</Link>
                        </li>
                        <li>
                          <Link to="/finance">Finance & Accounting</Link>
                        </li>
                        <li>
                          <Link to="/thirdparty">Third-Party Support</Link>
                        </li>
                        <li>
                          <Link to="/rims">RIMS</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row grid md:grid-cols-1 h-16">
                    <div>
                      <header className="pt-1">
                        <div className="float-left w-12 pt-1">
                          <img
                            className="h-10 w-10 bg-none float-left"
                            src={Cloud}
                            alt="MINDCOM"
                          />
                        </div>
                        Cloud
                      </header>
                      <ul className="mega-links pt-2">
                        <li>
                          <Link to="/cloudservices">Cloud Services</Link>
                        </li>
                        {/* <li><Link to="/privatecloud">Private Cloud</Link></li> */}
                      </ul>
                    </div>
                  </div>

                  <div className="row grid md:grid-cols-1 h-16">
                    <div>
                      <header className="pt-1">
                        <div className="float-left w-12 pt-2">
                          <img
                            className="h-8 w-8 bg-none float-left"
                            src={Engineering}
                            alt="MINDCOM"
                          />
                        </div>
                        Engineering Service
                      </header>
                      <ul className="mega-links pt-2">
                        <li>
                          <Link to="/engineering">Engineering Services</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row grid md:grid-cols-1 h-16">
                    <div>
                      <header className="pt-1">
                        <div className="float-left w-12 pt-1">
                          <img
                            className="h-8 w-8 bg-none float-left"
                            src={staffing}
                            alt="MINDCOM"
                          />
                        </div>
                        Staffing Solution
                      </header>
                      <ul className="mega-links pt-2">
                        <li>
                          <Link to="/staffing">Staffing Services</Link>
                        </li>
                        <li>
                          <Link to="/vendermanagementsystem">
                            {" "}
                            Vendor Management System
                          </Link>
                        </li>
                        <li>
                          <Link to="/serviceprocurment">
                            Services Procurement
                          </Link>
                        </li>
                        <li>
                          <Link to="/directsoursing">Direct Sourcing</Link>
                        </li>
                        <li>
                          <Link to="/totaltalentintelligence">
                            Total Talent Intelligence
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                SOLUTION & PRODUCT
              </Link>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                SOLUTION & PRODUCTS
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row md:grid-cols-1">
                    <div>
                      <header className="">
                        <div className="float-left w-12 pt-2">
                          <img
                            className="h-8 w-8 bg-none float-left"
                            src={solution}
                            alt="MINDCOM"
                          />
                        </div>
                        Solution & Products
                      </header>
                      {/* <header>Solution & Products</header> */}
                      <ul className="mega-links pt-2">
                        <li>
                          <Link to="/mcms"> m-CMS</Link>
                        </li>
                        <li>
                          <Link to="/scm">SCM</Link>
                        </li>
                        <li>
                          <Link to="/hospitality">Hospitality</Link>
                        </li>
                      </ul>
                      {/* <ul className="mega-links pt-2">
                       
                      </ul> */}
                    </div>
                  </div>
                  {/* <div className="row md:grid-cols-1">
                    <div>
                      <header className="">
                        <div className="float-left w-12 pt-2">
                          <img
                            className="h-8 w-8 bg-none float-left"
                            src={solution}
                            alt="MINDCOM"
                          />
                        </div>
                        Solution & Products
                      </header>
                      <ul className="mega-links pt-2">
                        <li>
                          <Link to="/ManagedServiceprovider">
                            Managed Service Provider
                          </Link>
                        </li>
                        <li>
                          <Link to="/EmployeOfRecord">Employer of Record</Link>
                        </li>
                        <li>
                          <Link to="/StrategicAdvisory">
                            Strategic Advisory
                          </Link>
                        </li>
                        <li>
                          <Link to="/DiversityEquityInclusion">
                            Diversity, Equity & Inclusion
                          </Link>
                        </li>{" "}
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                ABOUT US
              </Link>
              <input type="checkbox" id="showMega4" />
              <label htmlFor="showMega4" className="mobile-item">
                ABOUT US
              </label>
              <div className="mega-box">
                <div className="content ">
                  <div className="row grid md:grid-cols-3">
                    <div>
                      <Link to="/whoweare">
                        {" "}
                        <header className="pb-4 pt-0 mt-0">
                          <div className="float-left w-12 pt-2">
                            <img
                              className="h-7 w-7 bg-none float-left"
                              src={whoweare}
                              alt="MINDCOM"
                            />
                          </div>
                          Who we are
                        </header>
                      </Link>
                      <Link to="/leadership">
                        {" "}
                        <header className="pb-4">
                          <div className="float-left w-12 pt-2">
                            <img
                              className="h-7 w-7 bg-none float-left"
                              src={leadership}
                              alt="MINDCOM"
                            />
                          </div>
                          Leadership
                        </header>
                      </Link>
                      <Link to="/partners">
                        {" "}
                        <header className="pb-4">
                          <div className="float-left w-12 pt-2">
                            <img
                              className="h-7 w-7 bg-none float-left"
                              src={partners}
                              alt="MINDCOM"
                            />
                          </div>
                          Partnership
                        </header>
                      </Link>
                      <Link to="/whatwestandsfor">
                        {" "}
                        <header className="pb-2">
                          <div className="float-left w-12 pt-2">
                            <img
                              className="h-7 w-7 bg-none float-left"
                              src={whatwestandfor}
                              alt="MINDCOM"
                            />
                          </div>
                          What we stand for
                        </header>
                      </Link>
                    </div>
                    <div>
                      <header className="py-4">
                        <div className="float-left w-12 pt-2">
                          <img
                            className="h-7 w-7 bg-none float-left"
                            src={location}
                            alt="MINDCOM"
                          />
                        </div>
                        Location
                      </header>
                      <br />

                      <Link to="/locationoffices">Offices</Link>
                      <br />
                      <Link to="/contact2">Contact Us</Link>
                    </div>
                    <div>
                      <Link to="/business">
                        {" "}
                        <header className="pb-4">
                          <div className="float-left w-12 pt-2">
                            <img
                              className="h-7 w-7 bg-none float-left"
                              src={business}
                              alt="MINDCOM"
                            />
                          </div>
                          Business Excellence
                        </header>
                      </Link>

                      <Link to="/affiliation">
                        {" "}
                        <header className="pb-2">
                          <div className="float-left w-12 pt-2">
                            <img
                              className="h-7 w-7 bg-none float-left"
                              src={affiliation}
                              alt="MINDCOM"
                            />
                          </div>
                          Affiliation & Appraisals
                        </header>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/careers">CAREERS</Link>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn text-black">
            <MenuIcon />
          </label>
        </div>
      </nav>
    </>
  );
};
