import React from 'react'
import Firstbg from "./scmbg4.jpg"
export default function Scm() {
  const imageUrl = Firstbg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>SCM</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Redefine Your IT Service Delivery</p>
             </div>
    </div> 
    </div><br />
  
  <div className='px-10 py-3 '>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Amaze Users, Every Day</h1>
    </div>
    <div className='pl-0 md:pl-10'>
    <p className='text-lg text-center text-gray-600'>MINDCOM works with Partners, Associates and clients to design and implement high- performing supply chains that enable profitable growth in new and existing markets. By combining innovative strategies with practical know-how, we help companies to optimize their supply chains.

</p>
    
    
    </div>
  </div>


  <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>. Faster Order creation / Update <br />
                  . Consolidated data on each page for ease of information access<br />
                  . Real Time data access from other Applications<br />
                  
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>. Standalone Product with Integrations <br />
                  . Configurable<br />
                  . Covers the Maximum information in Supply chain and Asset Management<br />
                  
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>. Meets the MRO requirements <br />
                  . Built on latest Technology and tools<br />
                  . Focused on Manufacturing and Distribution companies<br />
                  
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>. Targeted towards SME customers. <br />
                  . Best reporting capabilities like xml, excel, PDF etc.<br />
                  . Best in class Business Intelligence reports by user with graphics<br />
                  
                  . Reduces the high cost of ERP licensing<br />
                  
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
         
        </div>

  


    
  </div>
  )
}
