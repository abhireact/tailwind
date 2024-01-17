import React from 'react'
import Ajilebg from './agilebg2.png'
export default function Agile() {
  const imageUrl = Ajilebg
  return (
  <div className='pt-16'>
    <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>AGILE</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Deliver High-Quality Applications Swiftly with Agile</p>
             </div>
    </div> 
    </div><br />

   <div className='px-10 pt-0 pb-3 '>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Accelerate Software Development, Reduce Time-To-Market</h1>
    </div>
    <div className='pl-0 md:pl-10'>
    <p className='text-lg text-center text-gray-600 pl-3'>Agile adoption accelerates software development by swiftly accommodating changes, reducing costs and time-to-market, and enhancing quality. Combining agile and emerging technologies will accelerate your software competency and close the gaps between your IT systems and the evolving technology and business trends. <br />
    Agile transformation is comprehensive and iterative and is an important cog in the wheel of business transformation as it involves changing deep-rooted cultural patterns and processes. Although agile is becoming the driving force and de facto standard for software development, several organizations are at a crossroads while choosing the adoption path. The organization’s culture and outlook are critical to its success. The right agile consulting services partner can help you address the challenges of choosing the adoption path and deliver projects efficiently.</p>
    
    </div>
  </div>

  <div >
      <div className="container2">
      <div className="card">
        
          <div className="content2">
              <h1>Agile Advisory Services</h1>
              <p>Assess agile readiness, plan for agile transformations, and launch pilot projects</p>
          </div>
      </div>
      <div className="card">
          
          <div className="content2">
              <h1>Agile Training Services</h1>
              <p>Agile executive workshop, Agile leader bootcamp, and Agile academy for teams</p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Agile Coaching Services</h1>
              <p>Our coaches help you to adopt and improve Agile methods and practices, and reinforce best practices to provide additional velocity</p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Staffing Services</h1>
              <p>We can provide human resources to meet your short and long-term staffing needs for enabling your smooth transition</p>
          </div>
      </div>

  </div>
  </div>


    <div className='py-5 px-5'>
    <h1 className='font-bold text-3xl text-center text-sky-700'>Simplify Your Agile Journey with MINDCOM</h1>
    <p className='text-lg text-center text-gray-600'>
    MINDCOM helps clients to start their agile transformation journey, drive transformation, evolve continuously, and meet their business objectives. We focus on organizational cultural change and engineering excellence with customized role-based training for teams. We guide you through every step of the transformation to overcome challenges by identifying your critical business objectives, and aligning agile principles to your roadmap. MINDCOM combines ‘agile’ with ‘lean’ by bringing synergy across the three key aspects – people, process, and technology. We help you to take agile to the next level with wider and seamless adoption to deliver greater business value. 
    </p>
    </div>

    {/* <div className="row py-10 bg-slate-200">
      <div className="col-md-4">
        <div className="card3 card3-1">
          <h3>Ionic Native</h3>
          <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card3 card3-2">
          <h3>UI Components</h3>
          <p>Tabs, buttons, inputs, lists, card3s, and more! A comprehensive library
            of mobile UI components, ready to go.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card3 card3-3">
          <h3>Theming</h3>
          <p>Learn how to easily customize and modify your app’s design to fit your
            brand across all mobile platform styles.</p>
        </div>
      </div>
    </div> */}
  </div>
  )
}
