import React from 'react'
import Skills from '../Skills/Skills'
import Firstbg from "./partnershipbg.webp"
export default function Partners() {
  const imageUrl = Firstbg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>Partnership</h1>
                 {/* <p className='text-white text-2xl font-style: italic pl-10'>Enabling Customers, Mentoring Teams and Leading the Way for a Better Shared World</p> */}
             </div>
    </div> 
    </div><br />
  <Skills />
  
    </div>
  )
}
