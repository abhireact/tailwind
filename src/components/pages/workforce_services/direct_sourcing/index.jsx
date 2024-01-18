import React from "react";
import Grid from "@mui/material/Grid";
import Firstbg from "./directsource.jpg";
import aiml from "./ai_ml.jpg"
import curation from "./curation.jpg"
import dataset from "./dataset.jpg"
import analytics from "./analytics.jpg"



export default function index() {
  const imageUrl = Firstbg;
  return (
    <div>
      <div
        className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25 items-center justify-center">
          <div className="text-4xl text-center">
            Direct Sourcing
            {/* <p className='text-white text-2xl font-style: italic pl-10'>Put Your Accounting Operations in the Fast Lane</p> */}
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          Mindcom’s Direct Sourcing solutions enable organizations to meet their
          extended workforce needs faster with lower costs and higher quality
          talent.
        </p>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} className="textgrid">
          <p className="text-justify px-7 py-0  text-3xl text-blue-500">
            Client Benefits
          </p>
        </Grid>
        <Grid item xs={12} sm={12} className="textgrid">
          <p className="text-center px-7 py-0 text-lg text-gray-700 ">
            Mindcom’s Direct Sourcing solutions give clients a single,
            end-to-end platform to directly fulfill their hiring needs. Through
            an integrated approach combining technology, data, and services, we
            enable our clients to leverage their brand to attract, curate, and
            engage talent communities.
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center    text-3xl text-blue-500">
              20%+ Increase in Cost Savings
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              Reduce traditional supplier costs and leverage your brand by
              finding the right talent at the right price with direct sourcing
              contingent labor.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              50%+ Faster Fill Ratios
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Connect the right talent with the right opportunity faster than
              ever with AI-driven candidate matching and skills assessments.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              10X More Talent Curated
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Combine an AI-powered SaaS Direct Sourcing platform with a
              privately curated talent pool to leverage your employer brand to
              find the best candidates.
            </p>
            <br />
          </div>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p className="text-center font-bold  text-4xl text-blue-500">
            Expand Your Talent Pool with Direct Sourcing
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Direct Sourcing Powered by AI/ML
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Match high quality candidates to roles quickly, hire for potential
              and drive a diverse workforce with our AI/ML capabilities.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Automatically attract & engage ideal candidates
              </li>
              <li className=" text-gray-700">
                Deploy sophisticated candidate matching technology
              </li>

              <li className=" text-gray-700">
                Drive a diverse and inclusive workforce at scale
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            alt="ai_ml"
            src={aiml}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            alt="curation"
            src={curation}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Curation Services​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Leverage the power of your company brand in combination with our
              value-added curation services to attract candidates, manage your
              talent pool of direct sourced candidates and engage the best hires
              cost-effectively.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Implement talent pool curation to widen access to candidates
              </li>
              <li className=" text-gray-700">
                Future proof with an automated & consistent talent funnel​
              </li>
              <li className=" text-gray-700">
                Improve the candidate experience for higher conversions​
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              World’s Largest Workforce Data Set
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Leverage the world’s largest contingent workforce data set to gain
              accurate rate intelligence for workers sourced anywhere across the
              globe.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Price talent anywhere in the world
              </li>
              <li className=" text-gray-700">Utilize real-time market rates</li>
              <li className=" text-gray-700">
                Analyze pay rates & bill rates for direct-sourced workers
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            alt="workforce_dataset"
            src={dataset}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            alt="analytics"
            src={analytics}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Program Management & Analytics
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Gain visibility into all aspects of the program and understand
              which factors lead to the most successful hires to increase
              overall hiring success.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Understand if your program is running efficiently​
              </li>
              <li className=" text-gray-700">
                Glean operational insights to improve program outcomes
              </li>
              <li className=" text-gray-700">
                Strategically shift approach to align with organizational goals
              </li>
              <li className=" text-gray-700">
                Standard inbound & outbound APIs​
              </li>
              <li className=" text-gray-700">Open architecture​</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
