import React from 'react'
import Typewriter from "typewriter-effect"
import Aviationbg from './aviation.webp'
export default function Aviation() {
    const imageUrl = Aviationbg
    return (
    <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>AVIATION</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Win in The Hyper-Connected Information Economy</p>
             </div>
    </div> 
    </div><br />
    <div>
    <div className='pt-3'>
      <h1 className='text-center text-3xl px-8  font-semibold text-sky-700'>Going Beyond The Ordinary</h1>
      <p className=' px-10 text-lg text-gray-600 text-center'>MINDCOM offers a wide variety of specialized parts and solutions for the aviation industry. Our service as a Supply Chain Partner, adds value by being flexible in our offerings, fast turnaround and reliable.
      <br />
      Embracing modern technology tears down the barriers to innovation and enables greater collaboration across the value chain. Forward-looking customer-centric systems, designed on modern architectures drive profitable and efficient business growth. While cloud-based platforms provide the flexibility to quickly adapt to rapidly changing market and consumer behavior, and deliver more brand engagement opportunities. <br />
      By having all operational information in one place, up-to-date, and accessible by all people across different departments, you can easily streamline operations, thereby eliminating paperwork and saving money.</p>
 
    </div>
    </div>
  
    <div >
       <div className="container2">
        <div className="card py-0">
          
            <div className="content2">
            <h1>Aviation Logistics Management</h1>
                <p>Aviation Logistics Management functions like material planning, procurement, loan management, Inventory receipts, stores management, Handling & Storage of Dangerous Goods & ESD items, vendor management, sales etc. are extensively covered in our Inventory management solution.</p>
                
            </div>
        </div>
        <div className="card">
            
            <div className="content2">
                <h1>Flight Operations and FDTL Software</h1>
                <p>Our system gathers all the information you require, assimilating them in one place with all the requisite cross-linking & interlinking with the engineering, maintenance & logistics management modules – thereby saving you time and effort while providing you with consistency of data.</p>
                            </div>
        </div>
        <div className="card">
            
            <div className="content2">
                
                <h1>Aircraft Maintenance Management</h1>
                <p>One of the uniqueness of our system is its capability to monitor maintenance tasks with multiple thresholds and intervals in an intelligent manner.</p>
                            </div>
        </div>
    </div>
    </div>
    <h1 className='text-center text-4xl font-bold pt-10 text-sky-700'>Our Expertise
 </h1>
    <div className="container4">

          <div className="box">
            <span></span>
            <div className="content4">
  
              <p>Our software solution will help you manage the Logistics functions with minimum Inventory Carrying Cost and through intelligent material planning as per the realistic consumption pattern.
              </p>
         
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
   
              <p>
              MINDCOM's software system streamlines your flight operations, no matter how demanding or complex.
              </p>
         
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              
              <p>Creation, scheduling and execution of work orders and work package to meet the above maintenance requirements and the associated task card management are also covered by the system.
              </p>
         
            </div>
          </div>
         
        </div>
  
{/*   
      <div className="row py-10 bg-slate-200">
        <div className="col-md-4">
          <div className="card3 card3-1">
            <h3>SAP</h3>
            <p>MINDCOM, a long-standing SAP Partner, provides end-to-end SAP support services that help clients evolve at the pace of disruption, reduce risk, and maximize business returns from SAP.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3 card3-2">
            <h3>ORACLE</h3>
            <p>MINDCOM, an Oracle Platinum Partner, Cloud Standard, has proven expertise in providing a broad range of services for on-premise and cloud-based Oracle applications.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3 card3-3">
            <h3>PEOPLESOFT</h3>
            <p className='pb-4'>As an Oracle Platinum Partner, Cloud Standard, we have extensive experience in providing end-to-end services for PeopleSoft across industry verticals.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
