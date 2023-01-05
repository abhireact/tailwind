import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

// import { ThemeContext } from '../../contexts/ThemeContext';
// import { skillsData } from '../../data/skillsData'
// import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    // const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: "black",
        boxShadow: `red`
    }

    return (
        <div className="skills" >
            <div className="skillsHeader">
                <h2 className='text-sky-800'>Our Partners</h2>

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
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(3).png" />
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(4).png" />
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(5).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(6).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(7).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(8).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(9).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(10).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(11).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(1).png"/>
                        <img src="http://mindcomtechnologies.com/wp-content/uploads/2022/08/partner/partner1%20(2).png"/>
                           
                        <img src=""/>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
