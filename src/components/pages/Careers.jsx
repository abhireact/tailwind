import React from "react";
import Firstbg from "./career2.jpg";
export default function Careers() {
  const imageUrl = Firstbg;
  return (
    <div>
      <section>
        <div
          className="bgofall"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="text-2xl">
            <h1 className="text-5xl text-white pl-10 font-bold font-serif">
              CAREERS
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
