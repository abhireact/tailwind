import React from 'react'
import Firstbg from "./businessexcellencebg.webp"

export default function Business() {
  const imageUrl = Firstbg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>BUSINESS EXCELLENCE</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Innovation and Create Value for Our Stakeholder</p>
             </div>
    </div> 
    </div><br />
  <div className='px-10 py-3 text-lg text-gray-600'>
      <div>
        <h1 className='text-4xl font-bold text-center text-sky-700'>VISION</h1>
        <p className='text-lg text-center text-gray-600'>“To become predictable and efficient organization through innovation and create value for our stakeholders”</p>
        <h1 className='text-4xl font-bold text-center text-sky-700'>QUALITY POLICY</h1>
        <p className='text-lg text-center text-gray-600'>We proudly pronounce our personal commitment to understand, meet and, when possible, exceed our Customer's expectations by providing defect free products, value added services & innovative solutions and flexible technology solutions and services on-time and within budgeted cost through the continuous Improvement of our processes. We shall also endeavour to nurture an environment where trust, fairness and integrity flourish.</p>
      </div>
  </div>
 
  <div>
  <h1 className='text-center text-4xl font-bold text-sky-700'>QUALITY OBJECTIVES</h1>
  <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Customers</h2>
              <p>. To provide defect free product, services & solutions to our customers. <br />
                  . To provide the product, services & solutions on time & within budgeted cost.<br />
                  . To provide value added services and innovative solutions.<br />
                  . To offer the most suitable designs, solutions and service support.<br />
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Employees</h2>
              <p>. To create an environment that empowers people to deliver quality.<br />
                  . To increase the skill of people through continuous relevant training.<br/>
                  . To instill and uphold a positive corporate culture.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          
        </div>

       </div>
  </div>

  )
}
