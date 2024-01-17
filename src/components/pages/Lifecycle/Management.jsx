import React from 'react'

export default function Management() {
  const imageUrl = "https://www.hostgator.com/blog/wp-content/uploads/2018/09/What-is-a-Content-Management-System.png"
  return (
  <div className='pt-16'>
    <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>DATA AND CONTENT MANAGEMENT</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Let Your Data do the Talking</p>
             </div>
    </div> 
    </div><br />

  <div className='px-10 pb-3'>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Making Sense Of Big Data Prudently And Proactively</h1>
    </div>
    <div className='pl-0 md:pl-10'>
    <p className='text-lg text-center text-gray-600'>To realize faster growth in competitive markets, organizations must capitalize on their data and accurately analyze it to obtain actionable insights. To gain competitive advantage, enterprises have to act on the insights from real-time data. <br />
     MINDCOM’s comprehensive BI and Analytics services help you convert your data into timely and actionable insights by unlocking hidden opportunities and insights to sharpen and quicken decision-making. Our top-notch data scientists have been developing statistical models and ML algorithms that our clients can deploy in their business processes. <br />
     Our data and content management capabilities run the length of the value chain – from marketing spend optimization to conjoint analysis for product configuration.We also offer early-warning systems and tailored offers based on system and collector data. Our churn-prediction-propensity model and real-time executive dashboards mitigate mission-critical risks effectively and with cost benefits.</p>
    
    </div>
  </div>
  
  <div >
      <div className="container2">
      <div className="card">
        
          <div className="content2">
              <h1>SEO</h1>
              <p>
       Ranging from keyword research to link building and copywriting, we implement effective on-page and off-page SEO strategies that are tailored to your specific business type.</p>
          </div>
      </div>
      <div className="card">
          
          <div className="content2">
              <h1>Web Development</h1>
              <p>
         
                Our back-end and front-end developers and designers can develop websites and applications that are focused on custom plugins, design integration, and user experience.
                </p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Pay Per Click (PPC)</h1>
              <p>
                  Our custom PPC marketing campaigns are designed to provide your brand with a strong online presence and increase your ROI. We create eye-catching ads and striking landing pages.
              </p>
          </div>
      </div>

  </div>
  </div>

  <div className='p-10 text-lg text-gray-600'>
    <h1 className='text-3xl font-bold text-sky-700 text-center'>Enterprise content is an asset, not a liability</h1>
    <p className='text-lg text-justify text-gray-500'>A well-structured Digital Content Management System offers all these and much more by design. It effectively helps you map patterns, discover and serve content contextually to the right audience on the right platform, deliver rich experiences and make intelligent decisions. It also makes you more agile by offering wide capabilities to scale, integrate and embrace new technologies. Most importantly, these capabilities are built keeping your content and customer experiences at the core.</p>
    <p className='text-lg text-justify text-gray-500'>
    In an experience-driven digital economy, your enterprise needs intelligent and integrated content management capabilities that’ll help you:
      
       . Accommodate and collaborate with multiple and diverse stakeholders, channels, and devices <br />
        . Deliver rich experiences – everywhere, every time and to everyone <br />
        . Embrace new technologies such as Artificial Intelligence (AI), Machine Learning (ML) and Big Data with ease and success <br />
        . Innovate, transform on the go
    </p>
  </div>

{/* 

    <div className="row py-10 bg-slate-200">
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
