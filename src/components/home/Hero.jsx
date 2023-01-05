import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent text-6xl  text-white font-semibold'>
            HELLO WE ARE MINDCOM GROUP
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`],
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
