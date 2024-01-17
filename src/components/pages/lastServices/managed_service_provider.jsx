import React from "react";
import Firstbg from "./managedservice.jpeg";
export default function DirectSourcing() {
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
              Managed Service Provider (MSP) Staffing Services
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
              Mindcom's managed service provider (MSP) staffing services are the
              go-to MSP solution for organizations seeking to strategically
              manage, optimize and adapt their extended workforce.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container2">
          <h1 className="text-center px-7 text-4xl font-bold text-white pt-5">
            Transform your Workforce Program with the Leading Vendor-Neutral
            Managed Services Provider (MSP)
          </h1>
          <div className="card">
            <div className="content2">
              <h1>Staffing Suppliers​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b> Ensure
                consistent performance measurement
                <br /> <b className="text-blue-400 text-4xl text-bold ">
                  .
                </b>{" "}
                Drive & protect vendor neutrality with our suppliers
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Set rules of engagement to ensure fair environments
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Direct Sourcing</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Alumni
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Retirees
                and “silver medalists”​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Unknown
                (brand-attracted) talent​ <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Statement of Work (SOW) Suppliers​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Cost
                savings
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Actionable
                insights to maximize visibility and control
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Risk
                mitigation
                <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Freelance Management Systems (FMS)</h1>
              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                New talent sourcing options
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Public
                and private talent clouds​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Talent
                redeployment opportunities​
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
          Mindcom's single, holistic MSP solution ensures the speed, scale,
          flexibility, transparency and expertise required to quickly adapt to
          regional, industry and economic shifts.​ Manage the entirety of the
          contingent worker lifecycle (hire to offboard) in less time, in one
          place with enterprise-level standardization.​
        </p>
      </div>
      <div className="py-5">
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Program Optimization</h2>
              <p>
                Architect and manage a best-in-class contingent labor program
                tailored to your organization. Our MSP software platform
                collaborates to manage the full lifecycle of your global
                contingent workforce.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Centralized Expertise </h2>
              <p>
                Enable continuous improvement, on-going enhancements and
                trend-setting innovation through our singular-focus on workforce
                management solutions
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2> Workforce Visibility</h2>
              <p>
                Leverage your choice of VMS to make better informed decisions on
                talent quality, geography, cost savings and containment.​
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
