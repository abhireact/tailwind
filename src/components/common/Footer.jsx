import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="inner">
            <div className="column is-nav">
                <div className="column-title">INDUSTRIES</div>
                <ul>
                    <li><Link to="/automobile">Automobiles</Link></li>
                    <li><Link to="/aviation">Aviation</Link></li>
                    <li><Link to="/engineering">Engineering</Link></li>
                    <li><Link to="/bfsi">BFSI</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/healthcare">Healthcare</Link></li>
                    <li><Link to="/it">IT</Link></li>
                </ul>
            </div>


            <div className="column is-nav">
                <div className="column-title">SERVICES</div>
                <ul>
                    <li><Link to="/oracle">Oracle</Link></li>
                    {/* <li><Link to="/salesforce">Salesforce</Link></li> */}
                    <li><Link to="/sap">SAP</Link></li>
                    <li><Link to="/agile">Agile</Link></li>
                    <li><Link to="/microservices">Microservices and API</Link></li>
                    <li><Link to="/devops">Devops</Link></li>
                    {/* <li><Link to="/qa">QA and Testing</Link></li> */}
                    <li><Link to="/cloudservices">Cloud Services</Link></li>
                    {/* <li><Link to="/privatecloud">Private Cloud</Link></li> */}
                    <li><Link to="/servicedesk">Service Desk Support</Link></li>
                    {/* <li><Link to="/management">Content Management</Link></li> */}
                    <li><Link to="/mservises">Managed Services</Link></li>
                    <li><Link to="/finance">Finance & Accounting</Link></li>
                    {/* <li><Link to="/thirdparty">Third-Party Support</Link></li> */}
                    <li><Link to="/rims">RIMS</Link></li>
                    <li><Link to="/staffing">Staffing</Link></li>
                </ul>
            </div>


            <div className="column is-nav">
                <div className="column-title">SOLUTIONS & PRODUCTS</div>
                <ul>
                    <li><Link to="/mcms">m-CMS</Link></li>
                    <li><Link to="/scm">SCM</Link></li>
                    <li><Link to="/hospitality">Hospitality</Link></li>
                </ul>
            </div>



            <div className="column is-nav">
                <div className="column-title">ABOUT MINDCOM</div>
                <ul>
                    <li><Link to="/whoweare">Who we are</Link></li>
                    <li><Link to="/whatwestandsfor">What we stand for</Link></li>
                    <li><Link to="/locationoffices">Locations</Link></li>
                    <li><Link to="/partners">Partners</Link></li>
                    <li><Link to="/affiliation">Affiliation</Link></li>
                    <li><Link to="/business">Business Excellence</Link></li>
                    <li><Link to="/leadership">Leadership</Link></li>
                </ul>
            </div>


            <div className="column is-nav">
                <div className="column-title">CAREERS</div>
                <ul>
                    <li><Link to="/contact2">Join Us</Link></li> <li><Link to="/locationoffices">Locations</Link></li>
                   
                </ul>
            </div>


        </div>
    </footer>
    </div>
  )
}

export default Footer





// <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/servicessss' component={Servicessss} />
//           <Route exact path='/portfolio' component={Portfolio} />
//           <Route exact path='/testimonials' component={Testimonials} />
//           <Route exact path='/blog2' component={Blog2} />
//           <Route exact path='/contact' component={Contact} />
//           <Route exact path='/contact2' component={Contact2} />
//           <Route exact path='/automobile' component={Automobile} />
//           <Route exact path='/aviation' component={Aviation} />
//           <Route exact path='/it' component={It} />
//           <Route exact path='/healthcare' component={Healthcare} />
//           <Route exact path='/education' component={Education} />
//           <Route exact path='/bfsi' component={Bfsi} />
//           <Route exact path='/careers' component={Careers} />
//           <Route exact path='/oracle' component={Oracle} />
//           <Route exact path='/salesforce' component={Salesforce} />
//           <Route exact path='/sap' component={Sap} />
//           <Route exact path='/agile' component={Agile} />
//           <Route exact path='/devops' component={Devops} />
//           <Route exact path='/microservices' component={Microservices} />
//           <Route exact path='/qa' component={Qa} />
//           <Route exact path='/servicedesk' component={Servicedesk} />
//           <Route exact path='/content' component={Content} />
//           <Route exact path='/management' component={Management} />
//           <Route exact path='/mservises' component={Mservises} />
//           <Route exact path='/finance' component={Finance} />
//           <Route exact path='/rims' component={Rims} />
//           <Route exact path='/thirdparty' component={Thirdparty} />
//           <Route exact path='/cloudservices' component={CloudServices} />
//           <Route exact path='/privatecloud' component={PrivateCloud} />
//           <Route exact path='/engineering' component={Engineering} />
//           <Route exact path='/staffing' component={Staffing} />
//           <Route exact path='/hospitality' component={Hospitality} />
//           <Route exact path='/scm' component={Scm} />
//           <Route exact path='/mcms' component={Mcms} />
//           <Route exact path='/affiliation' component={Affiliation} />
//           <Route exact path='/business' component={Business} />
//           <Route exact path='/leadership' component={Leadership} />
//           <Route exact path='/locationcontact' component={Locationcontact} />
//           <Route exact path='/locationoffices' component={Locationoffices} />
//           <Route exact path='/partners' component={Partners} />
//           <Route exact path='/whatwestandsfor' component={Whatwestandsfor} />
//           <Route exact path='/whoweare' component={WhoWeAre} />
//         </Switch>