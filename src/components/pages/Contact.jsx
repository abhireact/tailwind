import React from "react"
// import { Heading } from "../common/Heading"
// import { contact } from "../data/dummydata"
import { Link } from "react-router-dom"

export const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x bg-gradient-to-b from-slate-300 to-white py-8 ">
        <div className="py-7">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-800 px-20">Ready For a Phenomenal Support Experience?</h1>
          <p className="px-20 text-sky-800 text-lg">Request a complimentary consultation to learn more about how we can deliver exceptionally personalized enterprise software support at a much lower cost.</p>
        </div>
        <div className="px-20 pt-20">
            <button className="w-5/6 h-16 px-10  text-sky-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-sky-800">
              <Link to="/contact2"> REQUEST A CONSULTATION</Link>
      
            </button>
        </div>
       
      </div>
    </>
  )
}


