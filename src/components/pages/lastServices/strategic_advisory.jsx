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
              Strategic Advisory
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
              Magnit Strategic Advisory helps organizations streamline their
              contingent workforce programs and make data-driven decisions in
              all industries around the world.
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
              <h1>Workforce Program Design</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Obtain a
                roadmap and tools necessary to realize overall program goals
                <br /> <b className="text-blue-400 text-4xl text-bold ">
                  .
                </b>{" "}
                Effectively manage your CW program relying on decades of proven
                consultation
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Design a program to achieve increased speed, quality, and
                improve cost savings
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Market Analysis & Sourcing Strategies​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Assess global regulatory issues, competitive pressures & talent supply/demand
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Use the world’s largest data ocean to make improved sourcing decisions ​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Leverage data and expertise to maximize the remote workforce​ <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Benchmarking and Optimization​​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Compare benchmarks to improve satisfaction, quality, and compliance
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Obtain year-over-year material cost savings in excess of 10% per year
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Ensure extended workforce is aligned with goals and performing optimally
                <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Market Rate & Compensation Analysis​
​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Utilize 205B+ data points, expertise, and validation for reliable rate intel
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Achieve complete taxonomy and market rate alignment driving 10%+ savings
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Ensure market-competitive pricing globally, adhering to pay transparency regulationsoptimally
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
          Mindcom Strategic Advisory specializes in providing custom data
          analysis and optimization solutions for contingent workforce programs
          that enable organizations to operate more efficiently and
          effectively.​
        </p>
      </div>
      <div className="py-5">
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>Expand Visibility</h2>
              <p>
                Design more efficient and effective workforce programs by
                identifying and measuring key metrics that drive success.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2> Reduce Program Costs</h2>
              <p>
                Develop hiring and retention strategies that are optimized for
                cost with comprehensive market intelligence.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2> Gain Actionable Insights​</h2>
              <p>
                Establish recurring analytics and benchmark for business, market
                and competitive intelligence.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
