import React from "react";
import Firstbg from "./procurment.jpg";
export default function ServiceProcurment() {
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
            Services Procurement
            </h1>
            {/* <p className='text-white text-2xl font-style: italic pl-10'>Put Your Accounting Operations in the Fast Lane</p> */}
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="px-5 py-3">
          <div>
            {/* <h1 className='text-3xl fot-bold text-sky-800 text-center font-bold pt-3'>Optimizing Finances to Maximize Business Outcomes</h1> */}
          </div>
          <div>
            <p className="text-lg text-center text-gray-600">
              Mindcom Services Procurement is a turnkey and modular solution set that includes a fit-for-purpose VMS technology platform backed by a unique analytics data universe with best-in-class service delivery.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container2">
          {/* <h1 className="text-center px-7 text-4xl font-bold text-white pt-5">
          Optimize Visibility and Achieve Operational Excellence
          </h1> */}
          <br />
          <div className="card">
            <div className="content2">
              <h1>Services Procurement Consultancy</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b> Actionable insights to deliver on-budget and on-time SOW projects<br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Benchmarking via our unique, proprietary pay intelligence data universe<br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Customized reporting, outlining key business trends and opportunities
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Source and Procure-to-Pay</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Opportunities to capture savings with sophisticated category sourcing <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Milestone, deliverable and SLA tracking to improve overall vendor performance​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Enterprise-ready platform​ <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Risk mitigation and compliance for full contract management lifecycle<br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Services Procurement VMS​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Decreased time for project setup and execution
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Workflow-approved purchases, POs, and account codes to ensure compliance<br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Automation to capture savings via highly configurable omni-channel experience<br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Services Procurement Analytics</h1>
              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Complete financial and operational visibility into program performance​ <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Cost savings by leveraging real time pay intel in sourcing and change orders ​​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Seamless integrations with multiple VMS solutions
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-3 text-lg text-gray-600">
        <h1 className="text-3xl fot-bold text-sky-800 text-center font-bold pt-3">
          Client Benefits
        </h1>
        <p className="text-lg text-gray-600 text-center">
        Mindcom is the only vendor who offers a complete Services Procurement turnkey solution set as a one stop shop. We not only provide robust services, but clients who employ labor via SOW can leverage a fit-for-purpose Services Procurement VMS technology and the world’s largest proprietary procurement data universe.
        </p>
      </div>
      <div className="py-5">
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>15%+ Cost
Savings</h2>
              <p>
              Savings
Identify projects with the most cost savings and optimization potential then capture those savings with automation and real time intelligence.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>75% Decrease in Ramp Time</h2>
              <p>
              Drive successful business outcomes and compliance at a project and aggregated level based on procurement process best practices and continuous improvement.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>25%+ Spend Reclassified</h2>
              <p>
              Obtain actionable procurement analytics, reporting and insights related to best-in class-strategic sourcing solutions and SOW construction. 
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
