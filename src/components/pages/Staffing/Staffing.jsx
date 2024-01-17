import React from 'react'
import Firstbg from "./staffingbg2.jpg"
export default function Staffing() {
  const imageUrl = Firstbg
  return (
    <div className='pt-16'>
  <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>STAFFING SERVICES</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Service You Need, We Supply</p>
             </div>
    </div> 
    </div><br />

 
  <div className='px-10 py-3 '>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Whatever Type Of Staffing Service You Need, We Supply it</h1>
    </div>
    <div className='pl-0 md:pl-10'>
    <p className='text-lg text-center text-gray-600 pl-3'>
      You probably know about Adecco because of temp staffing. After all, we are known for providing top-notch temp talent and client services. The thing is, we do a lot more, including temp-to-hire, direct hire and even payroll. We're at the top of the staffing game across the board. Now that you know we offer so much, how can we help you?</p> 
    </div>
  </div>
 
  <div >
      <div className="container2">
      <div className="card">
        
          <div className="content2">
              <h1>Temp Staffing</h1>
              <p>Got a big project? Short a few people? Busy season coming up? All good reasons to use our temp services.</p>
          </div>
      </div>
      <div className="card">
          
          <div className="content2">
              <h1>Direct Hire</h1>
              <p>
            There’s a lot of pressure to make the right permanent hire. Just take that pressure and put it right on us.</p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Search</h1>
              <p>Looking for the best mid-level, salaried talent for your business? Rely on our dedicated, specialized team of seach consultants.</p>
          </div>
      </div>

  </div>
  </div>

  <div className='p-10 text-lg '>
    <h1 className='text-3xl text-center font-bold pb-3 text-sky-700'>How Can Our Staffing Services Help You?</h1>
    <p className='text-center text-gray-600 text-lg'>
  There’s no way around it: you need good people. The problem is, it takes time to find good people. The other problem is, you don’t have a lot of time. But, do you know what you do have? You’ve got us. And we’ve got the staffing services to help you find those good people whenever you need them and for whatever you need them to do. We can even help you pay them.

We have the largest network of pre-qualified candidates anywhere. Temp, perm, light industrial, professional. You name it! And that means no matter how many workers you need, or whatever skills you need, we can deliver ASAP. Let's work on your staffing plan together and make sure you build the best workforce possible for your budget.
</p>
  </div>
  </div>
  )
}
