import React from "react";
import AutomobileImg from "./automobileImg.jpg";
// import './Baground/Bagroundimg.css'
import "./card/card.css";
export default function Automobile() {
  const imageUrl = AutomobileImg;
  return (
    <div className="pt-16">
      <div
        className=" flex h-96 bg-cover bg-no-repeat bg-center bg-slate-600 select-none"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bgofall2 flex h-60 w-full hover:bg-core-secondary hover:bg-opacity-25">
          <div className="text-2xl">
            <h1 className="text-5xl text-white pl-10 font-bold pt-10 font-serif">
              Automobile
            </h1>
            <p className="text-white text-2xl font-style: italic pl-10">
              Digital services that fuel growth
            </p>
          </div>
        </div>
      </div>
      <br />

      <div>
        <div className="py-3">
          <h1 className="text-center text-3xl px-8  font-semibold text-sky-700">
            Go Beyond Manufacturing With Intelligence
          </h1>
          <p className=" px-10 text-lg text-gray-600 text-center">
            As technology continues to benefit Manufacturing, our partners
            leverage our extensive skill sets on manufacturing to blend IT
            benefits into their existing processes.The automotive industry is
            facing interesting and challenging times. The challenge is to become
            truly global. OEMs and Tier 1s will need to centralize purchase,
            globalize product development, blend product architectures, and
            manage global inventory – not to mention build and manage a global
            work force. To enable this, automotive OEMs and tier 1s need a
            domain champion with extensive experience in the automotive
            eco-system and with the ability to innovate faster and reduce
            manufacturing overheads.Our range of service offerings for the
            automotive industry extends from Engineering, CMS, and Enterprise IT
            to KPO solutions. Enterprises rely on us to become truly global.
            They are able to seamlessly build an integrated enterprise across
            geographies and economies by leveraging our in depth expertise on
            the automotive vertical. The technology team can benefit greatly
            from our skill sets.
          </p>
        </div>
      </div>
      <div>
        <div className="container2">
          <div className="card">
            <div className="content2">
              <h1>Supply Chain Management</h1>
              <p>
                Sourcing Strategies, Supplier Integration, E-Procurement, Route
                Planning / Logistics, Order Management, Inventory, Scheduling
                Agreements, Electronic Data Interchange, Supply Chain
                Optimization, and Network Optimization.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1>Marketing and Sales</h1>
              <p>
                Incentive and Pricing Management, Vehicle Configuration, Dealer
                Locator and Dealer Buy and Sell Portal, Retail Process
                Integration, Customer Relationship Management (CRM), Sales Force
                Automation (SFA), and Available to Promise.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">After-Sales</h1>
              <p>
                Parts and Inventory Tracking, Parts and Accessories Catalogue
                Marketing, Servicing, Warranty Management System, Government
                Regulations, and Business Analytics.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">Scheduling and Operations Management</h1>
              <p>
                Integrated Maintenance, Shop Floor Automation, Quality System,
                Master Production Schedule, Material Requirements Planning, Bill
                of Materials, Product Configuration, Regulatory Compliance and
                Product Costing.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content2">
              <h1 className="text-3xl">
                Human Resourses and Financial Management
              </h1>
              <p>
                Recruitment, Employee Master, Payroll, Chart of Accounts,
                Budget, Journal and Contra Entry, Accounts Receivables and
                Payables, Reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
