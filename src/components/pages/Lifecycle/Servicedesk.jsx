import React from 'react'
import Fourthsection from "./servicedesks4.jpeg"
export default function Servicedesk() {
  const imageUrl = "https://www.salesforce.com/content/dam/web/en_us/www/images/service-cloud/service-content-hub/Service-Help-Desk.png"
  const Thirdsection = Fourthsection
  return (
  
  <div className='pt-16'>
    <div className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"style={{backgroundImage:`url(${imageUrl})`}}>
    <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
    <div className="text-2xl">
                 <h1 className='text-5xl text-white pl-10 font-bold pt-10 font-serif'>SERVICE DESK SUPPORT</h1>
                 <p className='text-white text-2xl font-style: italic pl-10'>The Service Desk of the Future is Here</p>
             </div>
    </div> 
    </div><br />
  <div className='px-10 pb-3 '>
    <div >
    <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Rethink Productivity And Experiences with MINDCOM's <br /> Revolutionary Service Desk</h1>
    </div>
    <div className=' pl-0 md:pl-10'>
    <p className='text-lg text-center text-gray-600'>Expectations for and from the service desk are changing globally and across companies. As technology becomes ubiquitous while hybrid-remote work stays, the service desk takes the center stage to dramatically improve productivity, efficiency, and user experience. A powerful desk that leverages conversational AI, machine learning, and knowledge management tools, embraces shift left methodologies, and supported by skilled professionals is a must. Yet, for the CIOs and Service Desk leaders, it’s tough to talk about such a strategy when time and resources are limited. <br />
     MINDCOM’s Service Desk is here to address this. As a modern, revolutionary 24/7/365 dedicated/shared desk that leverages the best technologies, professionals, and industry practices, it can become an extended arm of your IT operations. <br /> Our 15+ years of experience in building industry/department/application-specific desks, hundreds of global customers, millions of incidents supported, and most importantly, a keen focus on delivering unparalleled experiences are some of the reasons why you should call us now. <br /> Best end-user support for faster resolution - we go beyond incident management and break-fixes and handle everything, from technology provisioning to complex problem-solving, providing the most comprehensive set of end-user support solutions.</p>
    
    </div>

    <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl text-center text-sky-800 font-bold pb-3'>MINDCOM's Customizable and Unified Service Desk</h1>
      <img className='w-5/6' src={Thirdsection} alt="" />
    </div>

   
  </div>

  {/* <div >
   
      <div className="card">
          
          <div className="content2">
              <h1>Clinical Resolution Ceneter</h1>
              <p>Specialized service, improved experience <br />
                With analysts trained and certified in the use of EMR applications, we provide much more than traditional helpdesk services to become the super-users for your applications.</p>
          </div>
      </div>
      <div className="card">
         
          <div className="content2">
              <h1 className='text-3xl'>Patient Resolution Ceneter</h1>
              <p>Lending a helping hand to patients <br />
                  As an empathetic IT support provider, we always go the extra mile to help you better serve patients as they navigate the new landscape of patient portals, telehealth, and remote patient monitoring.</p>
          </div>
      </div>

  </div>
  </div> */}

  {/* <section className='p-10 text-lg text-gray-600'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati cupiditate qui pariatur sequi ipsa quod doloribus tenetur explicabo facilis corrupti, nihil recusandae a dolorem repellendus nesciunt vel architecto inventore quidem vero officiis harum quis dolores. Odit hic veritatis necessitatibus, corporis nemo eos! Ratione amet laborum blanditiis illo sunt, fuga ipsam culpa a vitae expedita perferendis. Esse alias blanditiis est reiciendis provident eaque non omnis debitis neque repellat saepe eligendi, nulla voluptatem vero aspernatur eum, inventore accusantium, veniam perspiciatis officiis aliquam sequi. Voluptatibus ipsa exercitationem, soluta animi velit eos, dignissimos, esse accusamus et quam quo voluptates aliquam neque! Provident impedit dignissimos ducimus adipisci ea modi, placeat, ut blanditiis ab mollitia quisquam ipsa, quo eum similique nemo facere iusto maiores eos veritatis explicabo! Corporis nesciunt doloremque itaque nulla, possimus, molestiae ullam placeat qui excepturi, iusto dolores exercitationem ab. Placeat sed et deserunt obcaecati suscipit ut amet, dolorum maxime alias recusandae dolor error? Labore corrupti illo eveniet a esse quisquam voluptate odio doloremque architecto voluptates doloribus, ipsum ipsam quod harum. Pariatur ipsam dignissimos repudiandae vero fugiat. Nam, explicabo nulla! Id quae commodi cupiditate, nesciunt laborum perspiciatis fuga dicta eius tenetur dolores. Facilis, sed ex? Iure totam nihil quaerat praesentium? Sapiente, quisquam? Repudiandae!
  </section> */}

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
