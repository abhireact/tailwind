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
              Employer of Record (EOR) Services
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
              As the contingent workforce grows, there is an exponential
              increase in the complexity of managing sourcing, regulations, pay
              rates, and worker benefits. Organizations need Employer of Record
              (EOR) Services that optimize compliance, payroll, and benefits
              processes to mitigate risk and maximize the contingent worker
              experience.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container2">
          <h1 className="text-center px-7 text-4xl font-bold text-white pt-5">
            Better Attract, Manage and Retain Talent with Our EOR Services
          </h1>
          <div className="card">
            <div className="content2">
              <h1>Technology​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b> Trends,
                analysis and reporting on hiring activity to provide
                unprecedented visibility across the entire workforce
                <br /> <b className="text-blue-400 text-4xl text-bold ">
                  .
                </b>{" "}
                Optimized pay rates to ensure the most competitive offers
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Accelerated time-to-fill rates through a comprehensive
                understanding of your global talent landscape
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Comprehensive Worker Benefits</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Comprehensive coverage across medical, vision, dental and more
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Expedited
                onboarding and training processes​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Access to
                the industry’s first on-demand pay solution for the contingent
                workforce​ <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Process Efficiencies​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Enter and
                view timecards via a centralized system of record
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Track &
                enter expenses in real-time
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>Manage
                contracts and invoices without additional hassle or third-party
                logins
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
          Mindcom delivers the industry’s most comprehensive Employer of Record
          (EOR) services and Worker Experience solutions for enterprises
          worldwide, which is fully customizable to fit your requirements.​
        </p>
      </div>
      <div className="py-5">
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>100% Compliance Achieved</h2>
              <p>
                Successfully meet all compliance requirements via ongoing access
                to a team comprised of former IRS Auditors and legal
                professionals.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>20%+ Cost Savings</h2>
              <p>
                Save on every engagement that is filled as a payroll order vs.
                an agency order.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2> 99% Positive Engagement</h2>
              <p>
                Best-in-class benefits coupled with the industry’s first
                on-demand EOR payroll solution for the contingent workforce
                delivers an elevated worker experience.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
