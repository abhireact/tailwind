import React from 'react'
import Firstbg from "./qabg2.jpg"
export default function Qa() {
  const imageUrl = Firstbg
  return (
  <div className='pt-16'>
    <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>TESTING SERVICES</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Better QA, Smarter Apps</p>
             </div>
    </div> 
    </div><br />
  
  <div className='px-10 pt-0 pb-3 '>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Want Best-In-Class Apps? Invest In Robust Software Testing Services</h1>
    </div>
    <div className=' pl-0 md:pl-10'>
    <p className='text-lg text-center text-gray-600'>Ever-increasing competition is compelling companies to improve business outcomes by launching software applications with quick time-to-market. The faster organizations try to expand their digital capabilities, the more they are turning to next-gen technologies such as AI, RPA, Big Data and so on. Software Quality Assurance (QA) and Testing is the unseen force that propels your digital agenda by balancing cost, speed, and quality without compromises. <br /> The rapidly growing complexities of technology and digital demands impose enormous pressure on in-house QA and testing activities. You need a dependable software testing services provider to manage these complexities and mitigate technical and business risks. Effective, real-world QA testing removes risks while permitting you to focus more on growing your business.</p>
    
    </div>
  </div>
  <div >
      <div className="container2">
      <div className="card">
        
          <div className="content2">
              <h1>MINDCOM's QA and Testing Services</h1>
              <p>
            
            . Test Advisor and Consulting
           <br />
          
          . Specialized Testing   
           <br />
          
          . Test Environment Management   
           <br />
          . Manual and Automated Testing for – Waterfall, Agile, and DevOps approaches to software development <br />
        </p>
          </div>
      </div>
      <div className="card">
          
          <div className="content2">
              <h1>Digital Testing Services</h1>
              <p>
            . Mobile <br />
            . IoT <br />
            . API <br />
            . API <br />
            . Cloud
          </p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Test Enhancement Services</h1>
              <p>
            . AI-led QA Testing  <br />
            . Containerized Testing  <br />
            . Test Automation  <br />
            . Infrastructure Testing  <br />
            . QA/ Test Maturity Model Integration (TMMi) Assessment  <br />
          
          </p>
          </div>
      </div>

  </div>
  </div>

  <div className='p-10 text-lg text-gray-600'>
    <div>
     <h1 className='text-center font-bold text-3xl text-sky-700'>Why MINDCOM?</h1>
     <p className='text-lg text-center text-gray-500'>Our Quality Assurance (QA) and Testing services has enabled many of our global customers to improve software quality and time-to-market while reducing costs, time, and efforts. At the center of our testing practice is our innovation-driven Center for Testing Excellence, which is world-class and equipped with state-of-the-art testing infrastructure. It is here that our large pool of skilled testing professionals deploys the latest technology innovations, methodologies, and best practices in order to deliver the best outcomes to our customers. </p>
     <p className='text-lg text-center text-gray-500'>
      Partner with us. We can also help you build a testing organization that comprehensively and proactively addresses your modern-day test execution challenges with our flexible engagement models, ready-to-scale global talent, and customized milestone-based approach. </p>
    </div>
  
    <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>.Reduce the total cost of testing by up to 30% <br />
                  . Improve software quality by preventing about 99% of high-severity defects<br />
                  . Mitigate technical and business risks significantly<br />
                  . Leverage our strategic partnership and alliance with market-leading testing software suites Benefit from our embedded testing capabilities, skills, and consistent delivery of QA across multiple environments <br />
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <p>. Embedded testing capabilities, skills, and consistent delivery of QA across multiple environments <br />
                  . Access world-class skillset as our professionals possess extensive testing experience and deep domain expertise<br />
                  . Step up testing with our scalable testing resources and partnership approach<br />
                  . Make the most out of our well-defined best practices, ready-to-use solution accelerators and frameworks, and continuous investment in testing innovation<br />
                  
              </p>
            </div>
          </div>
        </div>
  </div>




{/* 
    <div className="row py-10 bg-slate-200">
      <div className="col-md-4">
        <div className="card3 card3-1">
          <h3>MINDCOM's QA AND TESTING SERVICES </h3>
          <p>
            
              . Test Advisor and Consulting
             <br />
            
            . Specialized Testing   
             <br />
            
            . Test Environment Management   
             <br />
            . Manual and Automated Testing for – Waterfall, Agile, and DevOps approaches to software development <br />
          </p>
        </div>
      </div> */}
      {/* <div className="col-md-4">
        <div className="card3 card3-2">
          <h3>DIGITAL TESTING SERVICES</h3>
          <p>
            . Mobile <br />
            . IoT <br />
            . API <br />
            . API <br />
            . Cloud
          </p>
        </div>
      </div> */}

      {/* <div className="col-md-4">
        <div className="card3 card3-3">
          <h3>TEST ENHANCEMENT SERVICES</h3>
          <p>
            . AI-led QA Testing  <br />
            . Containerized Testing  <br />
            . Test Automation  <br />
            . Infrastructure Testing  <br />
            . QA/ Test Maturity Model Integration (TMMi) Assessment  <br />
          
          </p>
        
        </div>
      </div> */}
    {/* </div> */}
  </div>
  )
}
