import React from 'react'

import Secondsection from "./whatwestandformid.jpeg"
import Firstbg from "./whatwestandforbg1.webp"
export default function Whatwestandsfor() {
  const imageUrl = Firstbg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>WHAT WE STAND FOR</h1> 
                 <p className='text-white text-2xl font-style: italic pl-10'>Focus on People, Process and Methods</p>
             </div>
    </div> 
    </div><br />
{/* 
  <div>
    <div  className='pt-4'>
         
    </div>
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-center text-4xl font-bold text-sky-800'>Focus on People, Process and Methods</h1>
        <img className='w-3/6' src={Secondsection} alt="img" />
    </div>
  </div> */}
    <div>
    <h1 className='text-center text-4xl font-bold text-sky-800'>OUR APPROACH</h1>
    <p className='text-center text-lg px-10 text-gray-600'>An experience unmatched anywhere else, with knowledgeable and thoughtful consultants plus flexible, tailored approaches — all centered on the right outcomes for your business.</p>

    <div className='grid md:grid-cols-3 px-4 py-4'>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>What We Do</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We can help with business transformation, hybrid workplace strategy, technology implementation and much more.</p>
      </div>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>How We Work</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>No one can match the combined benefits of our delivery teams: experience, flexibility and cost-efficiency.</p>
      </div>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>Who We Partner With</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We partner with companies that allow us to create and deliver solutions built specifically to meet your needs.</p>
      </div>
    </div>
       
    </div>

    {/* <hr className='text-gray-700' /> */}


    <div>
    <h1 className='text-center text-4xl font-bold text-sky-800 pt-5'>OUR PEOPLE</h1>
    <p className='text-center text-lg px-10 text-gray-600'>Passionate and purposeful, our consultants bring deep and diverse skillsets with a desire to dig in and do the work, no matter what — measuring success by results, not promises.</p>

    <div className='grid md:grid-cols-3 px-4 py-4'>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>Where We Work</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We assemble teams from across the country and India to provide the right solutions.

</p>
      </div>
      <div className='border-gray-500 border-3 p-4 m-3' >
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>Who We Hire</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We actively seek talented individuals with diverse skills, backgrounds and perspectives.</p>
      </div>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>How We Think</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We’re thought leaders who bring vast knowledge and insights to everything we do.</p>
      </div>
    </div>
       
    </div>


    {/* <hr className='text-gray-700 px-5' /> */}


    <div>
    <h1 className='text-center text-4xl font-bold text-sky-800 pt-5'>OUR MINDSET</h1>
    <p className='text-center text-lg px-10 text-gray-600'>Your business is our business, meaning we’re not just hired hands — we’re dedicated and experienced extensions of your team who care for your business as if it were our own.</p>

    <div className='grid md:grid-cols-3 px-4 py-4'>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>What We Stand For</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We are committed to getting you where you need to go and we’ll be with you every step of the way.

</p>
      </div>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>What We Value</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We believe success comes from working together to do good work and serve those around us.</p>
      </div>
      <div className='border-gray-500 border-3 p-4 m-3'>
        <h1 className='text-center text-2xl text-sky-800 font-semibold'>Why We’re Here</h1>
        <p className='text-center px-4 text-gray-500 text-lg'>We’re deeply committed to everything we do and it shows in the events we host, causes we support and awards we win.</p>
      </div>
    </div>
       
    </div>
  </div>
  ) 
}
