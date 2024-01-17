import React from 'react'
import Firstbg from "./whowearebg2.jpg"
export default function WhoWeAre() {
  const imageUrl = Firstbg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>WHO WE ARE</h1> 
                 <p className='text-white text-2xl font-style: italic pl-10'>Making Digital Change Happen</p>
             </div>
    </div> 
    </div><br />
  <div className='text-black px-10 py-3 text-lgy'>
    <p className='text-center text-gray-600 text-lg'>Founded in 2007 and headquartered in Bangalore, MINDCOM  is a niche consulting firm specializing in the enterprise resource planning (ERP), market for mid-sized companies across the globe. MINDCOM helps firms evaluate and select ERP software, manage the implementation of the software, and facilitate all related organizational changes to assure that each of its clients realize the full business benefits of the ERP SERVICES & Implementation. We minimize ERP risk, accelerate implementation progress, and increase the success and value of your ERP initiatives. <br />
     We have leveraged our deep experience and entrepreneurial history to partner with innovative organizations bringing fresh ideas and investment to the work space. <br />
     MINDCOM also helps in streamlining the Engineering services, Supply chain management and provides Industrial commodity management services. We are partnering with all the major OEMs and huge supplier base in providing just in time Products and Services.</p>
  </div>

  </div>
  )
}
