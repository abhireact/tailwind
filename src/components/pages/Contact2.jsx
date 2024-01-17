

import React from 'react'
import Form from './Form'
import Firstbg from "./contact2bg3.jpg"
export default function Contact2() {
  const imageUrl = Firstbg
  return (
    <>
    <div className='pt-20 bgofall h-auto' style={{backgroundImage:`url(${imageUrl})`}}>
      <div className='grid lg:grid-cols-2 p-5 md:p-16'>
        <div>
        <h1 className='text-4xl text-white pl-10 font-semibold font-serif'>CONTACT US</h1>
                 <p className='text-white text-xl font-style: italic pl-10'>Have A Support Expert Contact You</p>

{/* 
          <h1 className='font-bold text-white'>
           
          </h1>
          <h1 className='text-2xl md:text-4xl font-bold text-white'>
           
          </h1>
          <p className='md:text-lg text-white'></p> */}
        </div>
        <div className='bg-white z-0 pb-14 w-5/6'>
          <Form/> 
        </div>
      </div>
    </div>
    <div className='bg-white pb-0'>
      <h1 className='text-2xl text-sky-700 font-semibold pl-14 pt-10'>Wherever You’re Located, We’re Here to Help</h1>
      <p className='text-lg text-gray-600  pl-14 pb-20'>With worldwide centers, we offer 24/7/365 service that covers nearly every inch of the globe.</p>
    </div>
    </>
  )
}






