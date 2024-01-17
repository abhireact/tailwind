import React from 'react'
import Healthcarebg from './healthcare.jpg'
export default function Healthcare() {
   const imageUrl = Healthcarebg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>HEALTHCARE</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Redefining Digitalization of Care to Reimagine Delivery of Care</p>
             </div>
    </div> 
    </div><br />
  <div className='px-10 pb-5'>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Turn Disruptions Into Advantages. Become A Healthcare Leader</h1>
    </div>
 
    <p className='text-lg text-center text-gray-600 pl-3'>Medical responsibility of the employee, directly or indirectly, remains a key part of human resource management and is a company burden, as it involves diversion of a lot of time & energy of company manpower in a niche, multispecialty area that could be utilized otherwise. There are hassles of database maintenance and other hurdles related to 24 hours decision making responsibilities. To over come this scenario and to assist the corporate, we proudly presents Total Employee Healthcare solutions. Our aims to simplify the corporate health management, helping the companies to have a simple and hassle free employee medical solution.</p>
  
    
   
  </div>

  <div >
      <div className="container2">
      
     
      
      
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Process driven operations</h1>
              <p> Reduce Operational Cost Improve safety through best SOPs Reduce administrative headaches by being simple& single point contact for all medical needs. Ability to replicate efficient model at smaller places </p>
          </div>
      </div>
      
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Record Maintenance and Digitalization</h1>
              <p>Each employee database will be created and maintained by us for medical purposes Initial medical will be arranged as per the company standards at no extra cost for the company. All medical related issues like appointment , follow up and maintenance of medical records will be performed by us. </p>
      </div>
      </div>
    

  </div>
  </div>


    {/* <div className='p-10'>
    <h1 className='font-bold text-3xl text-center text-sky-700'>OUR AIM</h1><br />
    <p className='text-lg text-center text-gray-600'>
    To raise the happiness quotient of the company through smart health management and partner with client to create fireballs to blunt expected failure.
    </p>
  </div> */}
          <div>
    <h1 className='text-center text-4xl font-bold pt-10 text-sky-700'>Our Expertise
</h1>
    <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Proprietaery Content Management System for Health</h2>
                  <p>Turn your website and intranets into a high-performing, interactive destination with our feature-rich CMS platform. Deliver contextualized content, seamless interaction, and ultimate experience for users</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Resolution Center</h2>
                  <p>Get clinicians back to work fast with industry-leading 24/7/365 customer service from support analysts trained in business information systems.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Patient Resolution Center</h2>
                  <p>As an empathetic IT support provider, we always go the extra mile to help you better serve patients as they navigate the new landscape of patient portals, telehealth, and remote patient monitoring.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>

          </div>
          </div>
          </div>


  )
}
