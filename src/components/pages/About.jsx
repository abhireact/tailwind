import React from "react"
// import { about } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <div className='about grid md:grid-cols-2 bg-gradient-to-b from-sky-900 to-cyan-600'>

            <div className="py-14">
          <h1 className=" text-left text-white text-4xl px-4">Navigate your businesses with confidence.</h1>
          <h1 className="font-bold text-left text-white text-4xl px-4">We deliver it.</h1>

          </div>
          <div className="pt-10 pb-14 ">
            
                <p className="text-justify text-lg text-white px-4">
                With years of competence in advanced software solutions, MINDCOM designs effective strategies and innovative technologies that deliver results across diverse domains. Our services include Software Product Engineering, Application Development and Integration, Managed Services, Enterprise Application and Software and implementation of Microsoft Dynamics CRM and ERP.
                </p>
                <p className="text-justify text-lg text-white px-4">  We, as a forerunner in end-to-end IT services and solutions, aids organizations in taking advantage of the futuristic IT resources available. We deliver innovations in Information Infrastructure, Availability, Networking, Security and Services.</p>
              </div>
    
      </div>
    </>
  )
}
