import React from 'react'
import Firstbg from "./salesforcebg1.jpg"
export default function Salesforce() {
      const imageUrl = Firstbg
      return (
        <div className='pt-16'>
       
          <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>SALESFORCE</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Bringing People Together</p>
             </div>
    </div> 
    </div><br />
          <div className='pt-0'>
          <h1 className='text-center px-7 text-3xl font-bold text-sky-800'>
                Re-Think Innovation With The Power Of CRM, Enabled By Our End-To-End Service
            </h1>
            <p className='text-center px-7 py-0 text-lg text-gray-700'>
                MINDCOM uses the Salesforce to bring digital to life—and grow your customers’ mindshare.Effecting business transformation leveraging Salesforce is our core expertise. We help our customers define their vision, define the best roadmap for them and then handhold them across their transformation ROAD MAP. <br />
                Leveraging Salesforce as a native cloud platform, MINDCOM offers a breadth of services spanning digital strategy and experience design. Our focused approach helps clients create connected products and services, as well as deploy new business models for growth.<br />

                Our consultative approach allows you to extract the full value of Salesforce. We have a deep understanding of both traditional Salesforce cloud products and the latest innovations.<br />

                Our designers, technologists and industry experts represent one of the industry’s largest pools of Salesforce-certified consultants which enables us to:<br />

                Bring a strong cross-industry focus to global clients.
                Leverage Salesforce’s rapid application development platform to create, optimize sales and marketing, and launch.
                Drive next-gen business disruptions based on UX tools such as Salesforce Lightning, Apex technologies, integrations.
            </p>
            
         

          </div><br/>


          

          <div className="container3  bg-gradient-to-b from-sky-900 to-cyan-600">
          <h1 className='text-center px-7 text-4xl font-bold text-white pt-5'>
          Our Expertise
            </h1><br />
            <div className='pb-5'>
              <div className="col-md-4  px-10  py-2 w-4/5 m-auto">
                <div className="card3">
                  <h3>Application Development / Support</h3>
                  <p>
                  Custom Web/Mobile/Cloud Application design, development and support services.
                  </p>
                </div>
              </div>

              <div className="col-md-4  px-10  py-2 w-4/5 m-auto">
                <div className="card3 ">
                  <h3>Implementation / Support</h3>
                  <p className='p-0'>End to End Implementation and support for various industry leading Applications.We partner with you to strategically plan your implementation, no matter the size or scope. We’ll then help you configure and integrate your Salesforce products and customize them to your unique business needs.</p>
                </div>
              </div>

              <div className="col-md-4  px-10  py-2 w-4/5 m-auto">
                <div className="card3">
                  <h3>Remote Infrastructure Management</h3>
                  <p>Database Management, Network and other Hardware Management Services.</p>
                </div>
              </div>

              <div className="col-md-4  px-10  py-2 w-4/5 m-auto">
                <div className="card3 card3-3">
                  <h3>Optimization</h3>
                  <p>Optimizing your use of Salesforce will increase the value it provides to your organization. One of the best tools to understand opportunities for improvement is a Salesforce assessment. Our assessment is designed to understand your organization and help you fully utilize Salesforce’s capabilities, ensure your technical set-up is optimized and aligned with your business processes, and ensure you are getting the most from your Salesforce investment.</p>
                </div>
              </div>


              <div className="col-md-4  px-10  py-2 w-4/5 m-auto">
                <div className="card3">
                  <h3>Integration</h3>
                  <p>Integrations with Salesforce are essential to recognize the most value from the platform across your organization. We are experienced in performing integrations using both Salesforce products and non-Salesforce ecosystem tools, including Salesforce connectors, APIs, and third–party software. We have also created custom integration solutions for Salesforce, using our Salesforce development capabilities as well as our clients’ existing enterprise service bus (ESB) software, such as Mulesoft. When done correctly, data flows more efficiently and effectively across your enterprise, enabling your business and further increasing Salesforce’s value.</p>
                </div>
              </div>
              <div className="col-md-4  px-10  py-2 w-4/5 m-auto">
                <div className="card3">
                  <h3>Delivery & Execution</h3>
                  <p>Our Salesforce project engagements and managed services deliver successful implementations, advance your current usage, provide outstanding technical expertise and comprehensive operational support, enabling your business processes and allowing you to focus on your core business.</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
