import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

// import { ThemeContext } from '../../contexts/ThemeContext';
// import { skillsData } from '../../data/skillsData'
// import { skillsImage } from '../../utils/skillsImage'

import Partner1 from "./varroc.png"
import Partner2 from "./juniper.png"
import Partner3 from "./tata.png"
import Partner4 from "./rsb.png"
import Partner5 from "./rolsroyal.png"
import Partner6 from "./msx.png"
import Partner7 from "./globallogic.png"
import Partner8 from "./ford.png"
import Partner9 from "./eaton.png"
import Partner10 from "./deloit.png"
import Partner11 from "./ashoklayland.png"

function Skills() {

    // const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: "black",
        boxShadow: `red`
    }

    return (
        <div className="skills" >
            <div className="skillsHeader">
                <h2 className='text-sky-800'>Our Partners / Associates</h2>

            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        <img src={Partner1} />
                        <img src={Partner2} />
                        <img src={Partner3} />
                        <img src={Partner4} />
                        <img src={Partner5} />
                        <img src={Partner6} />
                        <img src={Partner7} />
                        <img src={Partner8} />
                        <img src={Partner9} />
                        <img src={Partner10} />
                        <img src={Partner11} />
                        
                       
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
