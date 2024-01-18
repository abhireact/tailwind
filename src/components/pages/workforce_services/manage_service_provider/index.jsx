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
          <div className="text-4xl text-center">
            Managed Service Provider (MSP) Staffing Services
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          Mindcom's managed service provider (MSP) staffing services are the
          go-to MSP solution for organizations seeking to strategically manage,
          optimize and adapt their extended workforce.
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
            Mindcom’s single, holistic MSP solution ensures the speed, scale,
            flexibility, transparency and expertise required to quickly adapt to
            regional, industry and economic shifts.​ Manage the entirety of the
            contingent worker lifecycle (hire to offboard) in less time, in one
            place with enterprise-level standardization.​
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center    text-3xl text-blue-500">
              Program Optimization
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              Architect and manage a best-in-class contingent labor program
              tailored to your organization. Our MSP software platform
              collaborates to manage the full lifecycle of your global
              contingent workforce.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              Centralized Expertise
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Enable continuous improvement, on-going enhancements and
              trend-setting innovation through our singular-focus on workforce
              management solutions.​
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              Workforce Visibility
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Leverage your choice of VMS to make better informed decisions on
              talent quality, geography, cost savings and containment.​
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p className="text-center font-bold  text-4xl text-blue-500">
            Transform your Workforce Program with the Leading Vendor-Neutral
            Managed Services Provider (MSP)
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Staffing Suppliers​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Our supplier model ensures staffing suppliers provide quality
              candidates on a timely basis at competitive rates, including:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Ensure consistent performance measurement
              </li>
              <li className=" text-gray-700">
                Drive & protect vendor neutrality with our suppliers
              </li>

              <li className=" text-gray-700">
                Set rules of engagement to ensure fair environments
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
            src={image3}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Direct Sourcing
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Leverage direct-sourced talent pools powered by our direct
              sourcing technology and managed by our consultants. Private talent
              pools include known workers such as:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">Alumni</li>

              <li className=" text-gray-700">
                Retirees and “silver medalists”​
              </li>
              <li className=" text-gray-700">
                Unknown (brand-attracted) talent
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Statement of Work (SOW) Suppliers​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              We have been able to help 100+ clients achieve multiple program
              benefits through our growing network of SOW suppliers including:​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">Cost savings</li>
              <li className=" text-gray-700">
                Actionable insights to maximize visibility and control
              </li>
              <li className=" text-gray-700">Risk mitigation</li>
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
              Freelance Management Systems (FMS)
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Mitigate risk and optimize opportunities by choosing to include
              FMS deployments under the management of our team. Freelance
              marketplaces create:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">New talent sourcing options</li>
              <li className=" text-gray-700">
                Public and private talent clouds
              </li>
              <li className=" text-gray-700">
                Talent redeployment opportunities
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
