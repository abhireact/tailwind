import React from 'react'
import Marquee from "react-fast-marquee";
import Firstbg from './oracle3.jpeg'
import '../Baground/Bagroundimg.css'
export default function Oracle() {
  const imageUrl = Firstbg   
  return (
      <div className='pt-16'>
    <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>ORACLE</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Stay Data-Driven Scale Success</p>
             </div>
    </div> 
    </div><br />


  <div className='px-10 py-3'>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Re-Think Innovation With The Power Of ERP, Enabled By Our End-To-End Service</h1>
    </div>
    <div className=' pl-0 md:pl-10'>
    <p className='text-lg text-center text-gray-600'> As a part of Oracle consulting services, we offer end to end consulting, implementation, development, maintenance and support services for Oracle application technology stack & Cloud, R12 EBS, Peoplesoft, JD Edwards, Hyperion, CRM, Fusion Cloud, Sales Force, etc.. We've got a specialized team of Oracle experts, including Oracle functional consultants and Oracle technical consultants who can work on your Oracle projects and carry out technical audits and CNC tasks, as well as conduct workshops. We have a strong focus on delivering high quality services at affordable rates. Our Oracle consulting services can help your company accelerate time-to- market, increase ROI, improve customer satisfaction, and stay competitive in today's evolving markets.</p>
    
    </div>
  </div>
  
{/* 
    <div className="container2">
        <div className="card">
          
            <div className="content2">
                <h1></h1>
                
            </div>
        </div>
        <div className="card">
            
            <div className="content2">
                <h1></h1>
                
            </div>
        </div>
        <div className="card">
           
            <div className="content2">
                <h1 className='text-3xl'></h1>
               
            </div>
        </div>
        <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'></h1>
              
           </div>
       </div>
       <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'></h1>
             
           </div>
       </div>
       <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'></h1>
              
           </div>
       </div>
       <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'></h1>
              
           </div>
       </div>

      </div> */}




<div className='bg-gradient-to-b from-sky-900 to-cyan-600'>
      <h1 className='text-white p-5 font-bold text-4xl text-center'>Our Services</h1>
      <div className='pb-5'>
        <div className="col-md-4  px-10  py-2 w-4/5 m-auto ">
                <div className="card3 ">
                  <h3>Functional Services</h3>
                  <p>Our in-house experts are capable enough to guide you through every aspect of the implementation / business process. Perform audits and assess Process Additions/Modifications and their impact.</p>
                </div>
              </div>

              <div className="col-md-4  px-10  py-2 w-4/5 m-auto">
                <div className="card3">
                  <h3>Implementation and Upgrades</h3>
                  <p>With deep functional and Technical expertise, we offer comprehensive methodology-based implementation and customization services to go live on schedule.</p>
                </div>
              </div>

              <div className="col-md-4 w-4/5 m-auto px-10  py-2">
                <div className="card3 card3-3">
                  <h3>Customization and Integration</h3>
                  <p>We offer support for existing customizations and also develop new customizations and Interface.</p>
                </div>
              </div>


              <div className="col-md-4 w-4/5 m-auto px-10  py-2">
                <div className="card3">
                  <h3>Maintenance and Support Services</h3>
                  <p>We provide 24/7 support for your Oracle database, applications, systems, and network infrastructure in an onsite/offshore model reducing software and infrastructure maintenance costs.</p>
                </div>
            </div>
              <div className="col-md-4 w-4/5 m-auto px-10  py-2">
                <div className="card3">
                  <h3>Cloud Transformation</h3>
                  <p>Oracle cloud solutions, including SaaS, PaaS and IaaS, offer unparalleled functional, technology and platform superiority. We can help to plan to cloud solution in full, hybrid or co-existence model.</p>
                </div>
              </div>
              <div className="col-md-4 w-4/5 m-auto px-10  py-2">
                <div className="card3">
                  <h3>Oracle BI ad Hyperion Services</h3>
                  <p>We help to Create powerful, scalable data models to turn complex data into actionable insights that can be easily understood in form of interactive reports.</p>
                </div>
              </div>
              <div className="col-md-4 w-4/5 m-auto px-10  py-2">
                <div className="card3">
                  <h3>Database Management, Backup & DR</h3>
                  <p>Database Management services aims to maintain performance, stability and availability of your application. Our backup and DR services will help you determine the best solution for your environment to protect your business critical data.</p>
                </div>
              </div>
              </div>
          </div><br />
                <h2 className='text-sky-800 text-center font-bold text-4xl pt-7'>TECHNOLOGY FOOTPRINTS & SERVICES</h2>
        <div className="skillsHeader">

            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    > 
                        <img src="http://jsmcpl.com/wp-content/uploads/2021/09/log-1.jpg"/>
                        <img src="http://jsmcpl.com/wp-content/uploads/2021/09/log-2-300x110.jpg"/>
                        <img src="http://jsmcpl.com/wp-content/uploads/2021/09/log-3-1-300x93.jpg"/>
                        <img src="http://jsmcpl.com/wp-content/uploads/2021/09/log-4-300x84.jpg"/>
                        <img src="http://jsmcpl.com/wp-content/uploads/2021/09/log-5-1-300x106.jpg"/>
                        <img src="http://jsmcpl.com/wp-content/uploads/2021/09/log-6.jpg"/>
                        <img src="http://jsmcpl.com/wp-content/uploads/2021/09/log-7.jpg"/>
               
                    </Marquee>
                </div>
            </div>
            
    </div>
  )
}
