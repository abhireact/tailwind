import React from "react";
import Grid from "@mui/material/Grid";
import Firstbg from "./image1.jpg";
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
            Diversity, Equity, & Inclusion
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-lg text-center text-gray-600">
          Mindcom enables organizations to match the level of Diversity, Equity
          & Inclusion (DE&I) involvement in their contingent workforce with that
          of their full-time workforce.
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
            Mindcom offers the only comprehensive DE&I solution for the
            contingent workforce. Our industry-leading consulting services and
            technology provide clients with actionable insights to drive
            cultural inclusion, enhance worker diversity and promote supplier
            diversity.
          </p>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center    text-3xl text-blue-500">
              Drive Cultural Inclusion
            </p>

            <p className="text-center   text-lg text-gray-700 ">
              In-house built educational resources and curated trainings enable
              all individuals and your organization to thrive by developing
              custom inclusion initiatives across your contingent workforce.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              Enhance Supplier Optimization
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Leverage our unique, purely vendor neutral model and deep supplier
              relationships to prioritize suppliers that have shown proven DE&I
              impact.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className="textgrid">
          <div>
            <p className="text-center   text-3xl text-blue-500">
              Leverage Data & Accountability
            </p>
            <p className="text-center  text-lg text-gray-700 ">
              Follow trends and KPIs over time and draw key insights to inform
              your DE&I strategy with diversity dashboards provided by our team
              of experts.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container p={4}>
        <Grid item xs={10} sm={10} className="textgrid">
          <p className="text-center font-bold  text-4xl text-blue-500">
            The Only Comprehensive DE&I Solution for the Contingent Workforce
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Resources & Educational Materials​
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Leverage resources and educational materials to drive cultural
              inclusion for the contingent workforce:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Education & best practices on unconscious bias & diversity
              </li>
              <li className=" text-gray-700">
                Strategic partnership to drive supplier DE&I impact
              </li>
              <li className=" text-gray-700">
                Inclusion services powered by Stanford University
              </li>
              <li className=" text-gray-700">
                Campaigns to inform clients on better understanding and
                impacting DE&I
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
            src={image4}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Transformational Services & Technology
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Reduce unconscious bias and bring proven hiring practices and
              diverse suppliers through these offerings:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Consult with clients & suppliers on DE&I investments
              </li>

              <li className=" text-gray-700">
                Partner with clients to empower suppliers making an impact
              </li>
              <li className=" text-gray-700">
                Facilitate forums for suppliers to discuss candidate diversity
              </li>
              <li className=" text-gray-700">
                Use analytics to gain DE&I insights on worker representation
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="textgrid">
          <div className="px-5">
            <p className="text-justify   text-3xl text-blue-500">
              Actionable Insights
            </p>
            <p className="text-justify  text-lg  text-gray-700">
              Make better decisions with analytics-based services, including:
            </p>
            <ul className="px-5 list-disc marker:text-red-500">
              <li className=" text-gray-700">
                Leverage industry-leading VMS to assess representation data
              </li>
              <li className=" text-gray-700">
                Securely collect, analyze & report clients’ diversity data
              </li>
              <li className=" text-gray-700">
                Develop a data-driven DE&I strategy targeting areas of need
              </li>
              <li className=" text-gray-700">
                Partner with world-class data analytics & consulting team
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="imggrid">
          <img
            className="right_top_curve flex flex-col justify-center items-center px-14"
            src={image3}
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
}
