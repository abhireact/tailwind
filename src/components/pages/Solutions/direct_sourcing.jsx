import React from "react";
import Firstbg from "./directsourcing.jpg";
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
              Direct Sourcing
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
              Mindcom's Direct Sourcing solutions enable organizations to meet their extended workforce needs faster with lower costs and higher quality talent.
            </p>
          </div>
        </div>
      </div>

      <div>
    
        <div className="container2">
          <div className="card">
            <div className="content2">
              <h1>Direct Sourcing Powered by AI/ML​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Automatically attract & engage ideal candidates
                <br /> <b className="text-blue-400 text-4xl text-bold ">
                  .
                </b>{" "}
                Deploy sophisticated candidate matching technology
                <br /> <b className="text-blue-400 text-4xl text-bold ">.</b>
                Drive a diverse and inclusive workforce at scale
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Omni-Channel</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Multi-tenant SaaS application <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Speed &
                flexibility​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Enterprise-ready platform​ <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Personalized, user centered UI <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Curation Services​</h1>

              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Implement
                talent pool curation to widen access to candidates
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Future
                proof with an automated & consistent talent funnel
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Improve
                the candidate experience for higher conversions
                <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>World’s Largest Workforce Data Set</h1>
              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>
                Price talent anywhere in the world <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Utilize
                real-time market rates ​​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b> Mindcom’s
                VMS seamlessly connects as an extension of your business​
                <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Analyze
                pay rates & bill rates for direct-sourced workers​ <br />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Program Management & Analytics​</h1>
              <p>
                <b className="text-blue-400 text-4xl text-bold ">.</b>Understand
                if your program is running efficiently​​ <br />
                <b className="text-blue-400 text-4xl text-bold ">.</b> Glean
                operational insights to improve program outcomes​​​ <br />{" "}
                <b className="text-blue-400 text-4xl text-bold ">.</b>{" "}
                Strategically shift approach to align with organizational goals
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
          Mindcom's Direct Sourcing solutions give clients a single, end-to-end
          platform to directly fulfill their hiring needs. Through an integrated
          approach combining technology, data, and services, we enable our
          clients to leverage their brand to attract, curate, and engage talent
          communities.
        </p>
      </div>
      <div className="py-5">
        <div className="container4">
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>20%+ Increase in Cost Savings</h2>
              <p>
                Reduce traditional supplier costs and leverage your brand by
                finding the right talent at the right price with direct sourcing
                contingent labor.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>50%+ Faster Fill Ratios</h2>
              <p>
                Connect the right talent with the right opportunity faster than
                ever with AI-driven candidate matching and skills assessments.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content4">
              <h2>10X More Talent Curated</h2>
              <p>
                Combine an AI-powered SaaS Direct Sourcing platform with a
                privately curated talent pool to leverage your employer brand to
                find the best candidates.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
