// import { Menu } from "@mui/icons-material"
// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import { navlink } from "../data/dummydata"
import logo from "../data/images/Logo.png"
// import "./Header.css"
export const Header = () => {
  // const [responsive, setResponsive] = useState(false)
  window.onscroll=function(){
    // var pos = window.pageYOffset;

    // if(pos>0 && pos<200){
    //   // document.getElementById('menu').style.position='absolute';
    //   document.getElementById('menu1').style.top='-150px';      
    // }
    // else{
    //   document.getElementById('menu1').style.top='0';
    //   // document.getElementById('menu').style.position='fixed';
    // }
  }
  return (
    <>
      <nav id='menu1' >
    <div className="wrapper">
      <div className="logo"><a href="/"><img className="h-10 bg-none" src={logo} alt="MINDCOM" /></a></div>
      <input type="radio" name="slider" id="menu-btn" />
      <input type="radio" name="slider" id="close-btn" />
      <ul className="nav-links">
        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
        
        {/* <!-- <li>
          <a href="/" className="desktop-item">Dropdown Menu</a>
          <input type="checkbox" id="showDrop"/>
          <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
          <ul className="drop-menu">
            <li><a href="/">Drop menu 1</a></li>
            <li><a href="/">Drop menu 2</a></li>
            <li><a href="/">Drop menu 3</a></li>
            <li><a href="/">Drop menu 4</a></li>
          </ul>
        </li> --> */}
         <li>
          <a href="/" className="desktop-item  hover:text-lime-700 font-semibold pb-2">INDUSTRIES</a>
          <input type="checkbox" id="showMega2" />
          <label htmlFor="showMega2" className="mobile-item">INDUSTRIES</label>
          <div className="mega-box">
            <div className="content">
              {/* <!-- <div className="row">
                <img src="img.jpg" alt="">
              </div> --> */}
              <div className="row">
                <a href="/automobile"><header><i className="w-16 h-2 fa fa-car fa-2x text-red-400" aria-hidden="true"></i>Automobile</header></a>
                <a href="/aviation"><header><i className="w-16 fa fa-plane fa-2x text-blue-500" aria-hidden="true"></i>Aviation</header></a>
                <a href="/it"><header><i className="w-16 fa fa-desktop fa-2x text-orange-600" aria-hidden="true"></i>IT</header></a>
               
               
                <a href="/bfsi"><header><i className="w-16 fa fa-lightbulb fa-2x text-yellow-400" aria-hidden="true"></i>BFSI</header></a>
              </div>
              
            </div>
          </div>
          </li>
       <li>
          <a href="/" className="desktop-item">SERVICES</a>
          <input type="checkbox" id="showMega" />
          <label htmlFor="showMega" className="mobile-item">SERVICES</label>
          <div className="mega-box">
            <div className="content">
              {/* <!-- <div className="row">
                <img src="img.jpg" alt="">
              </div> --> */}
              <div className="row">
                <header><i className="w-16 fa fa-laptop fa-lg text-green-300" aria-hidden="true"></i>Enterprise</header>
                <ul className="mega-links">
                  <li><a href="/oracle">Oracle</a></li>
                  <li><a href="/salesforce">Salesforce</a></li>
                  <li><a href="/sap">SAP</a></li>
                  
                </ul>
              </div>
              <div className="row">
                <header><i className="w-16 fa fa-mobile fa-lg text-blue-400" aria-hidden="true"></i>Application</header>
                <ul className="mega-links">
                  <li><a href="/agile">Agile</a></li>
                  <li><a href="/devops">DevOps</a></li>
                  <li><a href="/microservices">Microservices and API</a></li>
                  <li><a href="/qa">QA and Testing</a></li>
                </ul>
              </div>
              <div className="row">
                <header><i className="w-16 fa fa-lightbulb fa-lg text-yellow-400" aria-hidden="true"></i>Lifecycle Support</header>
                <ul className="mega-links">
                  <li><a href="/servicedesk">Service Desk Support</a></li>s
                  <li><a href="/management">Content Management</a></li>
                  <li><a href="/mservises">Managed services</a></li><br />
                <li><a href="/finance">Finance and fjruihd</a></li>
                  <li><a href="/rims">RIMS</a></li>
                  
                  
                </ul>
              </div>
              <div className="row">
                <header><i className="w-16 fa fa-cloud fa-lg text-gray-600" aria-hidden="true"></i>Cloud</header>
                <ul className="mega-links">
                  <li><a href="/cloudservices">Cloud Services</a></li>
                  <li><a href="/privatecloud">Private Cloud</a></li>
                </ul>
              </div>
              <div className="row">
                <header><i className="w-16 fa fa-lightbulb fa-lg text-yellow-400" aria-hidden="true"></i>Engineering Service & MRO</header>
                <ul className="mega-links">
                  <li><a href="/engineering">Engineering Services</a></li>
                </ul>
              </div>
              <div className="row">
                <header><i className="w-16 fa fa-lightbulb fa-lg text-yellow-400" aria-hidden="true"></i>Staffing Solution</header>
                <ul className="mega-links">
                  <li><a href="/staffing">Staffing Services</a></li>
                </ul>
              </div>
              
            </div>
          </div>
          </li>
          <li>
          <a href="/" className="desktop-item">SOLUTION & PRODUCT</a>
          <input type="checkbox" id="showMega3" />
          <label htmlFor="showMega3" className="mobile-item">SOLUTION & PRODUCTS</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <header>Solution & Products</header>
                <ul className="mega-links">
                  <li><a href="/mcms"> m-CMS</a></li>
                  <li><a href="/scm">SCM</a></li>
                  <li><a href="/hospitality">Hospitality</a></li>
                </ul>
              </div>
              
            </div>
          </div>
          </li>
          <li>
          <a href="/" className="desktop-item">ABOUT US</a>
          <input type="checkbox" id="showMega4" />
          <label htmlFor="showMega4" className="mobile-item">ABOUT US</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <a href="/whoweare"><header>Who we are</header></a>
                <a href="/leadership"><header>Leadership</header></a>
                <a href="/partners"><header>Partners</header></a>
                <a href="/whatwestandsfor"><header>What we stand for</header></a>
                <a href="/business"><header>Business Excellence</header></a>
                <a href="/affiliation"><header>Affiliation & Appraisals</header></a>
                <header>Location</header>
                <ul className="mega-links">
                  <li><a href="/locationoffices">Offices</a></li>
                  <li><a href="/locationcontact">Contact Us</a></li>
                </ul>
              </div>
              
            </div>
          </div>
          </li>
        <li><a href="/careers">CAREERS</a></li>
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
    </div>
  </nav> 
  </>
  )
}
