import React from 'react'
import Itbg from './it2.jpg'
export default function It() {
    const imageUrl = Itbg
    return (
    <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>Information Technology</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Get the Right Tech for IT</p>
             </div>
    </div> 
    </div><br />
 
    <div className='px-10 py2'>
      
      <h1 className='text-3xl text-center fot-bold text-sky-800  font-bold pt-3'>CUSTOM APPLICATION DEVELOPMENT</h1>
    
      
      <p className='text-lg text-center text-gray-600'>
          MINDCOM undertakes custom application development either as a turn-key solution or as part or larger client development team. Our custom application development services provide the it backbone for many projects, right from project initiation to development,implementation and support.
          </p>
      <p className='text-lg text-justify text-gray-600'>MINDCOM can efficiently custom-build to customer's specifications and certainly deliver on its promise. MINDCOM streamlines and updates client's application management processes for maximum efficiency and control. MINDCOM can help in building mission-critical and complex applications that address your unique business requirements and bring individualized process innovation to market. We use our pre- designed applications and custom solutions to continually transform your offerings and improve performance.</p>
      <p className='text-lg text-justify text-gray-600'>MINDCOM pioneers in providing enterprises the advantage of custom software application development, outsourcing and web support. We excel in custom application design, related development and integration services for companies seeking to enhance custom business applications. We use our thorough knowledge of software tools, technology components, application integration techniques and multi-platform environments to create optimally integrated systems that support our clients' business and technology requirements.</p>
      
   
    </div>

    <div >
        <div className="container2">
        <div className="card">
          
            <div className="content2">
                <h1>Content/Document Management System</h1>
                <p>Customized and cost-effective ECM services and solutions using IBM FileNet, MarkLogic, SharePoint, and Open Source software</p>
            </div>
        </div>
        <div className="card">
            
            <div className="content2">
                <h1>Workflow and Business Process</h1>
                <p>Solutions to help clients adapt to digital disruption with appropriate workflow and business process management capabilities</p>
            </div>
        </div>
        <div className="card">
           
            <div className="content2">
                <h1 className='text-3xl'>Search Technologies</h1>
                <p> SEO techniques to help structure your content so that users can easily find the required information from your publications and gain insights </p>
            </div>
        </div>
        <div className="card">
           
            <div className="content2">
                <h1 className='text-3xl'>Digitization Services</h1>
                <p>Repurposing of your content by organizing and converting it to digital formats of your preference quickly, accurately, securely, and cost-effectively </p>
            </div>
        </div>
        <div className="card">
           
            <div className="content2">
                <h1 className='text-3xl'>Data Archiving and Preservation</h1>
                <p>Process design to help you decide the appropriate digital format based on how long you choose to store / retain the data, ensuring the trustworthiness of the chosen repository or archive  </p>
            </div>
        </div>
  
    </div>
    </div>
  <div>
  <h1 className='text-center text-4xl font-bold pt-10 text-sky-700'>Our Expertise
 </h1>
    <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Portal Development</h2>
              <p>Helps connect, engage, interact, and collaborate better with stakeholders by offering the best-in-class, cross-channel user experience with compelling functionality
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Product And Platform Development</h2>
              <p>Accelerates the development of customized software solutions by applying our proven software product engineering services
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Implementation</h2>
              <p>Enables publishing of interactive digital content anytime, anywhere, over any network, to any device
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Maintenance And Support</h2>
              <p>Confers measurable business value by reducing TCO and increasing ROI
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Third-party Integration Services</h2>
              <p>Seamlessly integrates all key IT assets, enables them to work in sync with CRM, ERP, payment gateway, workflow, and other critical applications to provide an engaging, seamless, and unified experience for internal and external stakeholders
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Mobility Services</h2>
              <p>Customized mobile applications to meet strategic mobile initiatives for reliable and effective sharing of digital content anywhere, anytime, and on any device
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          </div>   
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
