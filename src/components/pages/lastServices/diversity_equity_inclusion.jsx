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
              Diversity, Equity, & Inclusion
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
              Magnit enables organizations to match the level of Diversity,
              Equity & Inclusion (DE&I) involvement in their contingent
              workforce with that of their full-time workforce.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container2">
          {/* <h1 className="text-center px-7 text-4xl font-bold text-white pt-5">
            Advisory Solutions for Contingent Workforce Programs​
          </h1> */}
          <div className="card">
            <div className="content2">
              <h1>Transformational Services & Technology</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Consult
                with clients & suppliers on DE&I investments
                <br /> <b className="text-blue-400 text-4xl text-bold ">
                  .
                </b>{" "}
                Partner with clients to empower suppliers making an impact
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Facilitate forums for suppliers to discuss candidate diversity
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Use analytics to gain DE&I insights on worker representation
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Market Analysis & Sourcing Strategies​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Leverage industry-leading VMS to assess representation data
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Securely
                collect, analyze & report clients’ diversity data <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Develop a
                data-driven DE&I strategy targeting areas of need​ <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Partner
                with world-class data analytics & consulting team <br />
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
          Mindcom offers the only comprehensive DE&I solution for the contingent
          workforce. Our industry-leading consulting services and technology
          provide clients with actionable insights to drive cultural inclusion,
          enhance worker diversity and promote supplier diversity.
        </p>
      </div>
      <div className="py-5">
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Drive Cultural Inclusion</h2>
              <p>
                In-house built educational resources and curated trainings
                enable all individuals and your organization to thrive by
                developing custom inclusion initiatives across your contingent
                workforce.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2> Enhance Supplier Optimization</h2>
              <p>
                Leverage our unique, purely vendor neutral model and deep
                supplier relationships to prioritize suppliers that have shown
                proven DE&I impact.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Leverage Data & Accountability​</h2>
              <p>
                Follow trends and KPIs over time and draw key insights to inform
                your DE&I strategy with diversity dashboards provided by our
                team of experts.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
