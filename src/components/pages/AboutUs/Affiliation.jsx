import React from 'react'
 import Nasscom from "./nasscom.png"
 import Iacc from "./iacc.png"
 import Iso from "./iso.png"
 import Newiso from "./newiso.jpeg"
 import Cmmisvc from "./cmmisvc.png"
 import Firstbg from "./affiliationbg2.png"
export default function Affiliation() {
  const imageUrl = Firstbg
  return (

  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>Affiliations & Appraisals</h1>
                 {/* <p className='text-white text-2xl font-style: italic pl-10'>Focus on People, Process and Methods</p> */}
             </div>
    </div> 
    </div><br />

  <div className='p-5'>
  <h1 className='text-center text-4xl pb-5 font-bold text-sky-800'><u>AFFILIATIONS</u></h1> 
    <div className='grid md:grid-cols-2'>
      <div className='flex flex-col justify-center items-center'>
        <img src={Nasscom} alt="" />
      </div>
      <div className='flex flex-col justify-center items-center'>
          <img src={Iacc} alt="" />
      </div>
    </div>
  </div>

  <div className='p-5'>
  <h1 className='pb-5 text-center text-4xl font-bold text-sky-800'><u>APPRAISALS</u></h1> 
    <div className='grid md:grid-cols-3'>
      <div  className='flex flex-col justify-center items-center'>
        <img className='w-60' src={Iso} alt="" />
      </div>
      <div  className='flex flex-col justify-center items-center'>
          <img className='w-56' src={Newiso} alt="" />
      </div>
      <div  className='flex flex-col justify-center items-center'>
          <img src={Cmmisvc} alt="" />
      </div>
    </div>
  </div>
  </div>
  )
}
