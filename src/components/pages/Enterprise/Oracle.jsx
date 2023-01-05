import React from 'react'
import Marquee from "react-fast-marquee";
import AutomobileImg from './oraclebg.jpg'
import '../Baground/Bagroundimg.css'
export default function Oracle() {
  const imageUrl = AutomobileImg
  return (
    <div className='pt-16'>
    
		 {/* <div className="bgofall" style={{backgroundImage:`url(${imageUrl})`}}>
             <div className="text-2xl">
                 <h1 className='text-4xl absolute right-0 text-red-700 font-bold'>STAY DATA-DRIVEN SCALE SUCCESS.</h1>
                 
             </div>
      
      </div>
    <br /> */}
    <div>
      <h1 className='text-center font-bold text-4xl p-7 text-sky-800 max-md:text-2xl'>Re-Think Innovation With The Power Of ERP, Enabled By Our End-To-End Service Offerings</h1>
      <p className='text-center text-black text-lg px-7 pb-9'>
      As a part of Oracle consulting services, we offer end to end consulting, implementation, development, maintenance and support services for Oracle application technology stack & Cloud, R12 EBS, Peoplesoft, JD Edwards, Hyperion, CRM, Fusion Cloud, Sales Force, etc.. We've got a specialized team of Oracle experts, including Oracle functional consultants and Oracle technical consultants who can work on your Oracle projects and carry out technical audits and CNC tasks, as well as conduct workshops. We have a strong focus on delivering high quality services at affordable rates. Our Oracle consulting services can help your company accelerate time-to- market, increase ROI, improve customer satisfaction, and stay competitive in today's evolving markets.
      </p>
    </div>

    <div className="container2">
        <div className="card">
          
            <div className="content2">
                <h1>Functional Services</h1>
                <p>Our in-house experts are capable enough to guide you through every aspect of the implementation / business process. Perform audits and Assess Process Additions/Modifications and their Impact</p>
            </div>
        </div>
        <div className="card">
            
            <div className="content2">
                <h1>Implementation and Upgrades</h1>
                <p>With deep functional and Technical expertise, we offer comprehensive methodology-based implementation and customization services to go live on schedule.</p>
            </div>
        </div>
        <div className="card">
           
            <div className="content2">
                <h1 className='text-3xl'>Customization and Integration</h1>
                <p>We offer support for existing customizations and also develop new customizations and Interface.</p>
            </div>
        </div>
        <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'>Maintenance and Support Services</h1>
               <p>We provide 24/7 support for your Oracle database, applications, systems, and network infrastructure in an onsite/offshore model reducing software and infrastructure maintenance costs.</p>
           </div>
       </div>
       <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'>Cloud Transformation</h1>
               <p>Oracle cloud solutions, including SaaS, PaaS and IaaS, offer unparalleled functional, technology and platform superiority. We can help to plan to cloud solution in full, hybrid or co-existence model.</p>
           </div>
       </div>
       <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'>Oracle BI ad Hyperion Services</h1>
               <p>We help to Create powerful, scalable data models to turn complex data into actionable insights that can be easily understood in form of interactive reports.</p>
           </div>
       </div>
       <div className="card">
           
           <div className="content2">
               <h1 className='text-3xl'>Database Management, Backup & DR</h1>
               <p>Database Management services aims to maintain performance, stability and availability of your application. Our backup and DR services will help you determine the best solution for your environment to protect your business critical data.</p>
           </div>
       </div>

      </div>
        <div className="skillsHeader">
                <h2 className='text-sky-800 pt-7'>TECHNOLOGY FOOTPRINTS & SERVICES</h2>

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
