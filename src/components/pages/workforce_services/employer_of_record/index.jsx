import React from "react";
import Grid from "@mui/material/Grid";
import Firstbg from "./image1.jpg";

import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
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
          <div className="text-4xl text-center">
            Employer of Record (EOR) Services
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          As the contingent workforce grows, there is an exponential increase in
          the complexity of managing sourcing, regulations, pay rates, and
          worker benefits. Organizations need Employer of Record (EOR) Services
          that optimize compliance, payroll, and benefits processes to mitigate
          risk and maximize the contingent worker experience.
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
            Mindcom delivers the industry’s most comprehensive Employer of
            Record (EOR) services and Worker Experience solutions for
            enterprises worldwide, which is fully customizable to fit your
            requirements.​
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center    text-3xl text-blue-500">
              100% Compliance Achieved
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              Successfully meet all compliance requirements via ongoing access
              to a team comprised of former IRS Auditors and legal
              professionals.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              20%+ Cost Savings
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Save on every engagement that is filled as a payroll order vs. an
              agency order.
            </p>
            <br />
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              99% Positive Engagement
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Best-in-class benefits coupled with the industry’s first on-demand
              EOR payroll solution for the contingent workforce delivers an
              elevated worker experience.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p className="text-center font-bold  text-4xl text-blue-500">
            Better Attract, Manage and Retain Talent with Our EOR Services
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">Technology​</p>
            <p className="text-justify  text-lg  text-gray-700">
              Effectively and intelligently identify, engage and secure the best
              talent in the world and achieve diversity goals through our direct
              sourcing solution, powered by Eightfold's AI technology. We oﬀer:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Trends, analysis and reporting on hiring activity to provide
                unprecedented visibility across the entire workforce
              </li>
              <li className=" text-gray-700">
                Optimized pay rates to ensure the most competitive offers
              </li>

              <li className=" text-gray-700">
                Accelerated time-to-fill rates through a comprehensive
                understanding of your global talent landscape
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
              Comprehensive Worker Benefits
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Offer workers the industry’s most comprehensive benefits package,
              which includes:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Comprehensive coverage across medical, vision, dental and more
              </li>

              <li className=" text-gray-700">
                Expedited onboarding and training processes​
              </li>
              <li className=" text-gray-700">
                Access to the industry’s first on-demand pay solution for the
                contingent workforce
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Process Efficiencies​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Provide workers and managers with an enhanced experience through
              our integrated VMS, which is easily accessible by web browser or
              mobile app. Users can easily:​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Enter and view timecards via a centralized system of record
              </li>
              <li className=" text-gray-700">
                Track & enter expenses in real-time
              </li>
              <li className=" text-gray-700">
                Manage contracts and invoices without additional hassle or
                third-party logins
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
      </Grid>
    </div>
  );
}
