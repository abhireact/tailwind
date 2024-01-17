import React from 'react'
import Firstbg from "./locationbg5.png"
export default function Locationoffices() {
  const imageUrl = Firstbg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>Location</h1>
                 {/* <p className='text-white text-2xl font-style: italic pl-10'>Enabling Customers, Mentoring Teams and Leading the Way for a Better Shared World</p> */}
             </div>
    </div> 
    </div><br />

  <div className="container3 bg-slate-200 ">
      <div className="row grid md:grid-cols-3">
        <div className="col-md-4">
          <div className="card4 card3-1">
             <div className='flex flex-col justify-center items-center p-8'>
              <i className="icon text-center far fa-map fa-5x" aria-hidden="true"></i>
              </div>
            <div>
            <h3 className='text-center text-3xl text-sky-800 font-semibold'>Office Location</h3>  
            <p className='text-center text-gray-500 text-lg'>MINDCOM, Chairman Layout, <br /> 100ft Road, Banaswadi, <br /> BANGALORE - 560043</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4">
          <div className="card4 card3-1 ">
             <div className='flex flex-col justify-center items-center p-8'>
              <i className="icon text-center fas fa-map-marked fa-5x" aria-hidden="true"></i>
              </div>
            <div>
            <h3 className='text-center text-3xl text-sky-800 font-semibold py-3'>MINDCOM USA INC</h3>
            <p className='text-center text-gray-500 text-lg'>1985 W HENDERSON RD, COLUMBUS OH 43220</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4">
          <div className="card4 card3-1">
             <div className='flex flex-col justify-center items-center p-8'>
              <i className="icon text-center far fa-envelope-open fa-5x" aria-hidden="true"></i>
              </div>
            <div>
            <h3 className='text-center text-3xl text-sky-800 font-semibold'>Email Information</h3>
            <p className='text-center text-gray-500 text-lg'>info@mindcomgroup.com <br />Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </div>
  )
}
