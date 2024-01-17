import React from "react";
import Grid from "@mui/material/Grid";
import Firstbg from "./vendermanagement.jpg";
import omnichannel from "./omnichannel.jpg";
import user from "./user.jpg";
import security from "./security.jpg";
import integrations from "./integrations.jpg";
import support from "./support.jpg";
import dashboard from "./dashboard.jpg";

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
            Vendor Management System (VMS)
            {/* <p className='text-white text-2xl font-style: italic pl-10'>Put Your Accounting Operations in the Fast Lane</p> */}
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          Mindcom specializes in streamlining your contingent workforce with
          advanced vendor management system (VMS) staffing software. Mindcom VMS
          heightens your business with its robust key benefits and capabilities
          in addition to being structured for your industry.
        </p>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} className="textgrid">
          <p className="text-justify px-7 py-0  text-3xl text-blue-800">
            Client Benefits
          </p>
        </Grid>
        <Grid item xs={12} sm={12} className="textgrid">
          <p className="text-center px-7 py-0 text-lg text-gray-700 ">
            Magnit's Vendor Management System (VMS) leads the charge with a
            configurable, compatible and robust cloud-based SaaS solution to
            manage the end-to-end, procure to pay, workflow of the contingent
            workforce.
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center    text-3xl text-blue-800">
              100% Program Optimization
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              Simply and intuitively manage your entire contingent workforce and
              worker lifecycles through one IWM Platform. Improved on/off
              boarding, efficiencies, reduction in time to fill, and extensive
              integrations capabilities
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-800">
              Up to 9% Annual Cost Savings
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Drive savings with cutting-edge, AI-driven features. Manage bill
              rates and benchmarks with the largest contingent workforce data
              set. ​​Optimize sourcing channels, rate savings, access to data,
              OT/DT, and reduction in tail spend.
            </p>
          </div>
        </Grid>
        <Grid item container xs={4} sm={4} className="textgrid">
          <Grid>
            <p className="text-center  text-3xl text-blue-800">
              90%+ Enhanced Visibility
            </p>
          </Grid>
          <Grid>
            <p className="text-center text-lg text-gray-700 ">
              Gain insights across the complete contingent workforce lifecycle
              from a single source of truth. Access to #1 in the industry, award
              winning staffing data, visibility, and insights.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p className="text-center font-bold  text-4xl text-blue-800">
            Optimize your Workforce Management Program with the Industry’s
            Leading VMS
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-800">
              User Experience​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Intuitive, consumerized user experience for enhanced,
              configurable, easy to use solution. ​​
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
            src={user}
            alt="user experience"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            src={omnichannel}
            alt="omni channel"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-800">
              Omni-Channel​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Seamlessly access Magnit VMS across devices through our web-based
              experience or native mobile app.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">Multi-tenant SaaS application</li>
              <li className=" text-gray-700">Speed & flexibility​</li>
              <li className=" text-gray-700">Enterprise-ready platform​</li>
              <li className=" text-gray-700">Personalized, user centered UI</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-800">
              Security & Compliance​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Industry-leading security certifications with a focus on data
              security and threat detection to mitigate zero-day events.​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                In-region data hosting options with Bring Your Own Key (BYOK)
                risk mitigation
              </li>
              <li className=" text-gray-700">Intuitive UX</li>
              <li className=" text-gray-700">
                Independently audited security certifications, including: SOC 1
                Type II, SOC2 Type II, CSA Star Level 2, Privacy Shield (EU and
                Swiss), ISO 27001:2013, 27701:2019, 27017:2015, 27018:2014 (US &
                EU)
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={security}
            alt="security compliance"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            src={integrations}
            alt="integrations"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-800">
              Integrations
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Robust, flexible integrations platform with best-in-class Magnit
              IO.​​​
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">Flexibility via configuration​</li>
              <li className=" text-gray-700">
                1800+ integrations and counting ​​
              </li>
              <li className=" text-gray-700">
                Magnit’s VMS seamlessly connects as an extension of your
                business​​
              </li>
              <li className=" text-gray-700">
                Standard inbound & outbound APIs​
              </li>
              <li className=" text-gray-700">Open architecture​</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-800">
              Analytics & Dashboards​​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Advanced BI dashboards with detailed real-time analytics for
              ability to view critical staffing and recruitment data for your
              company requirements.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Executive persona-based dashboards​
              </li>
              <li className=" text-gray-700">Full enterprise visibility​</li>
              <li className=" text-gray-700">
                Performance metrics and predictive analytics​
              </li>
              <li className=" text-gray-700">
                Access data from multiple channels
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={dashboard}
            alt="dashboard and analytics"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="left_button_curve flex flex-col justify-center items-center px-14"
            src={support}
            alt="support"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-800">
              Implementation & Support​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Our systematic approach to implementation focuses on consultative
              structure with advanced methodology & processes.
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Planning/Discovery-Design-Build/Validate-Deployment-Stabilize​​
              </li>
              <li className=" text-gray-700">
                Consultative approach, understanding big picture and optimal
                design​​​
              </li>
              <li className=" text-gray-700">
                Staffing industry experts with 900+ implementations and 20+
                years' experience​​
              </li>
              <li className=" text-gray-700">
                Proven VMS supplier methodology​
              </li>
              <li className=" text-gray-700">
                Governance & change management​​
              </li>
              <li className=" text-gray-700">
                Channels to support via help desk, knowledge base, whitepapers​​
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
