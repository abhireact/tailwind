import React from "react";
import Grid from "@mui/material/Grid";
import Firstbg from "./image5.jpg";
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg";

export default function index() {
  const imageUrl = Firstbg;
  return (
    <div>
      <div
        className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25 items-center justify-center">
          <div className="text-4xl text-center">Total Talent Intelligence</div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          Total Talent Intelligence empowers organizations with robust data
          solutions to better understand the global talent landscape and ensures
          the right hire, at the right time, at the right price.
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
            Mindcom’s Total Talent Intelligence platform enables HR,
            Procurement, and other business leaders to optimize talent strategy
            for the entire workforce by offering the world’s largest market
            rate, salary and talent data set.
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center    text-3xl text-blue-500">
              5+ Day Improvement in Fill Time
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              Build strategic workforce programs more efficiently and
              effectively with a comprehensive understanding of your global
              talent landscape.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              10%+ in Talent Cost Savings
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Develop hiring and retention strategies that are optimized for
              cost by gaining visibility into comprehensive market and talent
              intelligence.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              100% Visibility to Hiring Pools
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Access insights from data relevant to DE&I goals and leverage
              predictive analytics to benchmark against your peers, industry and
              geography.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p className="text-center font-bold  text-4xl text-blue-500">
            Make Strategic Hiring & Retention Decisions with Total Talent
            Intelligence
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Pay Intelligence​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Gain access to the world’s largest on-demand market rate and
              salary data set to build competitive compensation strategies and
              inform workforce decisions to secure top talent globally.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">Branded UI</li>
              <li className=" text-gray-700">Intuitive UX</li>
              <li className=" text-gray-700">
                Tailored experience for clients, suppliers, and workers
              </li>
              <li className=" text-gray-700">Task-based roles & permissions</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={image4}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            src={image3}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Talent Intelligence​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Identify the right talent pools of professional full-time and
              contingent positions globally to engage with and understand your
              competition.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Optimize recruiting & retention through predictive sourcing
              </li>

              <li className=" text-gray-700">
                Assess the competitive landscape via industry compensation
                benchmarking​
              </li>
              <li className=" text-gray-700">
                Analyze talent patterns to optimize engagement
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Data as a Service ​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Customize and build your own talent intelligence solution through
              direct API access to the world’s largest global market rate,
              salary and talent intelligence data set.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Consume the data however it best suits your organization
              </li>
              <li className=" text-gray-700">
                Access data directly anytime, anywhere
              </li>
              <li className=" text-gray-700">
                Use data with existing HRIS, ERP, procurement & analytics tools
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={image1}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            src={image2}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Strategic Advisory
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Our team of experts provide customized and sustainable solutions
              powered by comprehensive market data and business intelligence.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Gain insights through workforce analytics & benchmarking ​
              </li>
              <li className=" text-gray-700">
                Assess how your data compares to others in your industry​​
              </li>
              <li className=" text-gray-700">
                Define workforce strategies to support your company's goals
              </li>
              
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
