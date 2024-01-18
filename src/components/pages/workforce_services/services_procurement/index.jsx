import React from "react";
import Grid from "@mui/material/Grid";
import Firstbg from "./services.jpg";
import pay from "./pay.jpg";

import vms from "./vms.jpg";
import analytics from "./analytics.jpg";

import consultancy from "./consultancy.jpg"

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
            Services Procurement
            {/* <p className='text-white text-2xl font-style: italic pl-10'>Put Your Accounting Operations in the Fast Lane</p> */}
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          Mindcom Services Procurement is a turnkey and modular solution set that
          includes a fit-for-purpose VMS technology platform backed by a unique
          analytics data universe with best-in-class service delivery.
        </p>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} className="textgrid">
          <p
            className="text-justify px-7 py-0  text-3xl text-blue-500
          "
          >
            Client Benefits
          </p>
        </Grid>
        <Grid item xs={12} sm={12} className="textgrid">
          <p className="text-center px-7 py-0 text-lg text-gray-700 ">
            Mindcom is the only vendor who offers a complete Services
            Procurement turnkey solution set as a one stop shop. We not only
            provide robust services, but clients who employ labor via SOW can
            leverage a fit-for-purpose Services Procurement VMS technology and
            the world’s largest proprietary procurement data universe.
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p
              className="text-center    text-3xl text-blue-500
            "
            >
              15%+ Cost Savings
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              Identify projects with the most cost savings and optimization
              potential then capture those savings with automation and real time
              intelligence.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p
              className="text-center   text-3xl text-blue-500
            "
            >
              75% Decrease in Ramp Time
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Drive successful business outcomes and compliance at a project and
              aggregated level based on procurement process best practices and
              continuous improvement.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p
              className="text-center   text-3xl text-blue-500
            "
            >
              25%+ Spend Reclassified
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Obtain actionable procurement analytics, reporting and insights
              related to best-in class-strategic sourcing solutions and SOW
              construction.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p
            className="text-center font-bold  text-4xl text-blue-500
          "
          >
            Optimize Visibility and Achieve Operational Excellence
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p
              className="text-justify   text-3xl text-blue-500
            "
            >
              Services Procurement Consultancy
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Leverage a strategic advisory service which helps you achieve
              better business outcomes through identification of cost savings
              and best in class SOW construction. We provide:​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className="text-gray-700">
                Actionable insights to deliver on-budget and on-time SOW
                projects
              </li>
              <li className="text-gray-700">
                Benchmarking via our unique, proprietary pay intelligence data
                universe
              </li>
              <li className="text-gray-700">
                Customized reporting, outlining key business trends and
                opportunities
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={consultancy}
            alt="consultancy_image"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            src={pay}
            alt="secure_pay"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p
              className="text-justify   text-3xl text-blue-500
            "
            >
              Source and Procure-to-Pay​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Utilize our full scope, modular services to fit your particular
              needs. We provide:​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Opportunities to capture savings with sophisticated category
                sourcing
              </li>

              <li className=" text-gray-700">
                Milestone, deliverable and SLA tracking to improve overall
                vendor performance​
              </li>
              <li className=" text-gray-700">
                Risk mitigation and compliance for full contract management
                lifecycle
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p
              className="text-justify   text-3xl text-blue-500
            "
            >
              Services Procurement VMS
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Obtain project visibility, enhance project performance, and
              increase ROI with mindcom's fit-for-purpose SOW technology. We
              provide:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Decreased time for project setup and execution
              </li>
              <li className=" text-gray-700">
                Workflow-approved purchases, POs, and account codes to ensure
                compliance
              </li>
              <li className=" text-gray-700">
                Automation to capture savings via highly configurable
                omni-channel experience
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={vms}
            alt="security compliance"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            src={analytics}
            alt="analytics"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p
              className="text-justify   text-3xl text-blue-500
            "
            >
              Services Procurement Analytics
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Leverage our unique, proprietary data universe to benchmark
              against in order to improve business outcomes and generate cost
              savings. We provide:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Complete financial and operational visibility into program
                performance
              </li>
              <li className=" text-gray-700">
                Cost savings by leveraging real time pay intel in sourcing and
                change orders
              </li>
              <li className=" text-gray-700">
                Seamless integrations with multiple VMS solutions
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
