import React from "react";
import Grid from "@mui/material/Grid";
import Firstbg from "./image1.jpg";

import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";

export default function index() {
  const imageUrl = Firstbg;
  return (
    <div>
      <div
        className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25 items-center justify-center">
          <div className="text-4xl text-center">Strategic Advisory</div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          Mindcom Strategic Advisory helps organizations streamline their
          contingent workforce programs and make data-driven decisions in all
          industries around the world.
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
            Mindcom Strategic Advisory specializes in providing custom data
            analysis and optimization solutions for contingent workforce
            programs that enable organizations to operate more efficiently and
            effectively.​
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center    text-3xl text-blue-500">
              Expand Visibility
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              Design more efficient and effective workforce programs by
              identifying and measuring key metrics that drive success.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              Reduce Program Costs
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Develop hiring and retention strategies that are optimized for
              cost with comprehensive market intelligence.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              Gain Actionable Insights​
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Establish recurring analytics and benchmark for business, market
              and competitive intelligence.
            </p>
            <br />
          </div>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p className="text-center font-bold  text-4xl text-blue-500">
            Advisory Solutions for Contingent Workforce Programs​
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Workforce Program Design​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Comprehensive analysis of current workforce to provide visibility
              into spend, headcount, key metrics, savings opportunities,
              governance, and best practices.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Obtain a roadmap and tools necessary to realize overall program
                goals
              </li>
              <li className=" text-gray-700">
                Design a program to achieve increased speed, quality, and
                improve cost savings
              </li>

              <li className=" text-gray-700">
                Effectively manage your CW program relying on decades of proven
                consultation
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={image2}
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
              Market Analysis & Sourcing Strategies​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Optimize job title taxonomy, identify opportunities, and make
              recommendations on global workforce mix, pay bands, sourcing
              locations and strategies.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Assess global regulatory issues, competitive pressures & talent
                supply/demand
              </li>

              <li className=" text-gray-700">
                Use the world’s largest data ocean to make improved sourcing
                decisions
              </li>
              <li className=" text-gray-700">
                Leverage data and expertise to maximize the remote workforce
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Benchmarking and Optimization​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Assess current program processes, policies, and technologies to
              identify cost saving opportunities and provide guidance on best
              practices for maximum ROI.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Compare benchmarks to improve satisfaction, quality, and
                compliance
              </li>
              <li className=" text-gray-700">
                Obtain year-over-year material cost savings in excess of 10% per
                year
              </li>
              <li className=" text-gray-700">
                Ensure extended workforce is aligned with goals and performing
                optimally
              </li>
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
            src={image5}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Market Rate & Compensation Analysis​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Provide job taxonomy alignment, pay/bill rate guidance, and
              skill-based intelligence to maximize hiring strategies anywhere in
              the world.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Utilize 205B+ data points, expertise, and validation for
                reliable rate intel
              </li>
              <li className=" text-gray-700">
                Achieve complete taxonomy and market rate alignment driving 10%+
                savings​​
              </li>
              <li className=" text-gray-700">
                Ensure market-competitive pricing globally, adhering to pay
                transparency regulations
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
