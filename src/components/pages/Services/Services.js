import React,{useContext} from 'react';

// import { ThemeContext } from '../../contexts/ThemeContext';

// import { servicesData } from '../../data/servicesData';

import './Services.css'
import SingleService from './SingleService/SingleService.js';
function Services() {

    // const { theme } = useContext(ThemeContext);
    return (
        <>
                <div className="services" id="services" style={{backgroundColor:'white'}}>
                    <div className="services-header">
                        <h1 style={{color: "black"}}>Services</h1>
                    </div>
                    <div className="services-body">
                        {/* <p style={{color:"black"}}>
                            These are some of the services I offer. Reach out to me if I can help you with any!
                        </p> */}
                        <div className="services-bodycontainer">
                           
                                <SingleService
                                key={2}
                                id={4}
                                title={'kumar'}
                                />

                                <SingleService
                                key={3}
                                id={5}
                                title={'bedanta'}
                                />

                                <SingleService
                                key={2}
                                id={6}
                                title={'kumar'}
                                />

                                <SingleService
                                key={2}
                                id={7}
                                title={'kumar'}
                                />

                                <SingleService
                                key={2}
                                id={8}
                                title={'kumar'}
                                />
                                <SingleService
                                key={2}
                                id={9}
                                title={'kumar'}
                                />
                                <SingleService
                                key={2}
                                id={10}
                                title={'kumar'}
                                />
                            
                        </div>
                    </div>
                </div>
            
       </>
    )
}

export default Services
