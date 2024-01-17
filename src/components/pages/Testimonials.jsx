import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/dummydata"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='testimonials  hero'>
    
            
        <div className='container'>
          <Slider {...settings}>
            {testimonials.map((val) => (
              // <div className='box'>
              //   <i data-aos='zoom-out-up'>
              //     <p>Customer Speak</p>
              //   </i>
              //   {/* <div className='img' data-aos='zoom-out-right'>
              //     <img src={val.image} alt='' />
            //   </div> */}
            //   <p className="text-white" data-aos='zoom-out-down'>{val.text}</p>
            //   {/* <h3 data-aos='zoom-out-left'>{val.name}</h3> */}
            //   {/* <label data-aos='zoom-out'>{val.post}</label> */}
            // </div>
            <div>
            <div className="grid md:grid-cols-2">
                 {/* <FormatQuoteIcon /> */}
                 <div>
                <h1 className="text-white text-5xl font-bold text-center p-2">Customer Speak</h1><br />
                <div className='img' data-aos='zoom-out-right'>
                    <img src={val.image} alt='' />
                </div>
                </div>
                <div>
                 <p className="text-lg md:text-3xl  text-white
                  text-left">
                    <b className="text-4xl text-yellow-400">"</b>  {val.text} <b className="text-4xl text-yellow-400">"</b> 
                  </p>
                  <p className="text-right text-white text-lg font-semibold">{val.belowtext}</p>
                </div>
                </div>
              </div>
              
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
