import React from "react";
import Firstbg from "./totaltalentintelegents.jpeg";
export default function TotalTalentIntelligence() {
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
              Total Talent Intelligence
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
              Total Talent Intelligence empowers organizations with robust data
              solutions to better understand the global talent landscape and
              ensures the right hire, at the right time, at the right price.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container2">
          <h1 className="text-center px-7 text-4xl font-bold text-white pt-5">
            Make Strategic Hiring & Retention Decisions with Total Talent
            Intelligence
          </h1>
          <br />
          <br />
          <div className="card">
            <div className="content2">
              <h1>Pay Intelligence​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b> Real-time
                compensation benchmarking for any role, anywhere worldwide
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Access location-based pay rates to optimize hiring decisions
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Analyze compensation strategies compared to current market costs
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Talent Intelligence</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Optimize recruiting & retention through predictive sourcing
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Assess
                the competitive landscape via industry compensation
                benchmarking​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Analyze
                talent patterns to optimize engagement
                <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Data as a Service​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Consume
                the data however it best suits your organization
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Access
                data directly anytime, anywhere <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Use data
                with existing HRIS, ERP, procurement & analytics tools
                <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Strategic Advisory</h1>
              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Gain insights through workforce analytics & benchmarking <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Assess
                how your data compares to others in your industry​​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Define
                workforce strategies to support your company's goals
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
          Mindcom's Total Talent Intelligence platform enables HR, Procurement,
          and other business leaders to optimize talent strategy for the entire
          workforce by offering the world’s largest market rate, salary and
          talent data set.
        </p>
      </div>
      <div className="py-5">
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2> 5+ Day Improvement in Fill Time</h2>
              <p>
                Build strategic workforce programs more efficiently and
                effectively with a comprehensive understanding of your global
                talent landscape.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>10%+ in Talent Cost Savings</h2>
              <p>
                Develop hiring and retention strategies that are optimized for
                cost by gaining visibility into comprehensive market and talent
                intelligence.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>100% Visibility to Hiring Pools</h2>
              <p>
                Access insights from data relevant to DE&I goals and leverage
                predictive analytics to benchmark against your peers, industry
                and geography.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
