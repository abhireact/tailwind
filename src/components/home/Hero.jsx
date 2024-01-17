import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero z-0 '>
        {home.map((val, i) => (
          <div className='heroContent pl-14 text-5xl text-left text-white font-semibold font-style: italic'>
            We Are Mindcom
            <h1 className="text-4xl text-left text-blue-400 pt-3">
              <Typewriter
                options={{
                  strings: [ `${val.post}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        ))}
      </section>
    </>
  )
}
