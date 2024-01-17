import React from "react";
import Firstbg from "./hospitality7.jpg";
export default function Hospitality() {
  const imageUrl = Firstbg;
  return (
    <div className="pt-16">
      <div
        className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
          <div className="text-2xl">
            <h1 className="text-5xl text-white pl-10 font-bold pt-10 font-serif">
              HOSPITALITY
            </h1>
            <p className="text-white text-2xl font-style: italic pl-10">
              Let’s Make Your Journey Memorable, Digitally
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="px-10 py-3 ">
        <div>
          <h1 className="text-3xl fot-bold text-sky-800 text-center font-bold pt-3">
            Highest Quality Services For Customers With High Expectations
          </h1>
        </div>
        <div>
          <p className="text-lg text-center text-gray-600">
            Customers today set a high bar for the experience they expect from
            hospitality and travel providers. Providers in this space need to
            constantly beat competitors in providing the most intuitive,
            connected and seamless experience possible. Customers want new and
            highly customized services and expect providers to anticipate the
            ask and offer top-level experiences. <br />
            MINDCOM comes to the aid of hospitality and travel businesses by
            offering innovative technology solutions to enhance guest
            experience, and increase revenue, customer loyalty, and brand
            awareness. Our teams deliver measurable business outcomes and
            generate data-driven customer engagement for our clients.
          </p>
        </div>
      </div>

      <div>
        <div className="container2">
          <div className="card">
            <div className="content2">
              <h1>Application Transformation</h1>
              <p>
                To help the Hospitality industry implement digital technologies
                and enhance the guest experience.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Infrastructure Management</h1>
              <p>
                Hybrid Cloud services and Application Monitoring to deliver a
                quality experience for every guest across the eco-system.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Digital Assurance</h1>
              <p>
                Testing services for Property Management systems, Guest
                Reservation systems, Loyalty and Enterprise applications.
              </p>
            </div>
          </div>
          {/* <div className="card">
          
          <div className="content2">
              <h1>CXT</h1>
              <p>Creating an enriched customer experience with faster time to market by improving operational efficiencies, intimacy and advocacy.</p>
          </div>
      </div> */}
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-center text-4xl font-bold text-sky-700">
          Our Services
        </h1>
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>
                Developing websites, property management systems and customer
                reservation systems. User experience design for web and mobile,
                ensuring better visibility.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>
                Providing cloud application services, migration and cloud
                development for major hospitality customers
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>
                API integration of hospitality business applications with online
                travel websites to achieve higher room bookings at lower
                commission costs
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>
                Application maintenance and support for top hospitality
                customers with cost reduction and service improvements
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>

          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>
                Hospitality-focused test cases, accelerators and frameworks to
                reduce time-to-market In-depth domain knowledge and experienced
                domain consultants
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              {/* <h2>Card one</h2> */}
              <p>
                Rationalization of multiple travel applications with Cloud-based
                solutions. Hospitality domain consultants with Cloud expertise.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
        {/* <div>
          <h1>
           Restaturant Management System </h1>
<p>
<b>>></b>  Provides seamless integration from Order to Kitchen to Billing <br />
<b>>></b>  Supports remote Printing <br />
<b>>></b>  Multi device support <br />
<b>>></b>  Improves Efficiency <br />
<b>>></b>  Minimises Errors <br />
<b>>></b>  Gives an advanced edge to your business <br />
</p>


          </div> */}
      </div>
    </div>
  );
}
