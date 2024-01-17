import React from 'react'
import Educationbg from './education2.jpg'
export default function Education() {
  const imageUrl = Educationbg
  return (
  <div className='pt-16'>
     <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>Education</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>Deliver Great Learning Experiences, Digitally</p>
             </div>
    </div> 
    </div><br />
 
  <div className='px-10 pb-4'>
    
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Let Technology Revolutionize The Learning Experience</h1>
    <p className='text-lg text-center text-gray-600 pl-3'>MINDCOM has broadened its services horizon and used its detailed ERP solution to build a web based and user friendly Campus Management System catering to Pre-Schools, Schools, Colleges and Universities. We are one stop solution for complete campus management processes. From complex admission processes, fee management, attendance, transport, inventory to library management everything could be managed easily with the help of MINDCOM ERP software.Our smartly designed ERP software ends the paper-work and ensures streamlined processes with efficient modules like lesson planning, student management, payroll management, homework/assignments, or exam management. </p>
  
    

  </div>

  <div >
      <div className="container2">
      <div className="card">
        
          <div className="content2">
              <h1>MINDCOM CMS</h1>
              <p>MINDCOM CMS is a collaborative platform offering large set of modules that are designed keeping in mind all kind of requirements and activities that take place in any kind of educational institution. It is an easy to customize ERP system that can be operated from anywhere and can integrate all functions on a single platform.</p>
          </div>
      </div>
      <div className="card">
          
          <div className="content2">
              <h1>Student Information Management</h1>
              <p>It provides easy to use features across all set of users and an effective communication model. Our Analytics System brings together client's data and turns it into useful information for speedy decision making.</p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Library Management</h1>
              <p>A system to help librarians to manage the entire inventories of library items, by cataloguing details and tracking status of all books easily through an automated workflow </p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Assets Management</h1>
              <p> Simple, fast, and easy method of tracking library assets, eliminating the expense on the replacement of lost assets</p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Finance and Accounting</h1>
              <p>  An integration of library asset management and accounting information that details the financial status and availability of resources, enabling effective utilization </p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>HRMS</h1>
              <p> Easy, effort-saving way to create and update information of every resource of an institution to increase productivity, accelerate performance, and reduce cost of ownership </p>
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
                <h2>Digital Enablement</h2>
                  <p className='p-0'>Build, align, and enable high-performing platforms to address the requirements of education to rapidly accelerate on digital transformation.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Application Development And Maintenance</h2>
                  <p>Get customized applications with latest technologies that enhance performance while reducing cost.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Application Modernization</h2>
                  <p>Transform your legacy applications to the latest and emerging technologies to minimize risk, reduce maintenance costs, and meet compliance needs.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>User Experience And Gamification</h2>
                  <p>Incorporate gaming into existing processes to boost productivity, improve skills, drive performance of the workforce, and also attract more customers with interactive technologies.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Data Management And Analytics</h2>
                  <p>Track students’ performance, optimize learning experience, and forecast performance to enable student retention, and gain valuable information from your data for effective decision-making.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Infrastructure Management And Support</h2>
                  <p>Incorporate gaming into existing processes to booBuild, transform, and manage your critical IT infrastructure more efficiently to meet your business needs.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Enterprise Content Management</h2>
                  <p>Capture, store, search, share, publish, reuse, and archive information in books from any device, anywhere, and anytime.</p>
              
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
            <h2>Content Digitization</h2>
                  <p>Enhance student experience and improve operational efficiencies by converting data in any format to digital.</p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          
          </div>   
        </div>
  </div>
  )
}
