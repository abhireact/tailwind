import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import './Blog.css';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';

import Consultingbox from './consultingbox.jpeg'
import Itbox from './itbox.jpeg'
import Engineeringbox from './engineeringbox.jpg'
import Staffingbox from './staffingbox.jpeg'
function Blog() {

    // const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: "blue", 
            backgroundColor: "blue",
            "&:hover": {
                color: "black", 
                backgroundColor: "white",
            }
        },
        viewArr : {
            color: "white", 
            backgroundColor: "white",
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: "white", 
                backgroundColor: "black",
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
                <div className="blog" id="blog" style={{backgroundColor: "rgb(175, 180, 180)"}}>
                    
                    <div className="blog--body">
                        <div className="blog--bodyContainer p-5">
                            {/* {blogData.slice(0, 3).reverse().map(blog => ( */}
                                <SingleBlog 
                                    // theme={theme}
                                    title={"Business Consulting"}
                                    desc={"Consulting has become a much needed value service offerings due to continuous advancement in technology. We provide the services data primarily consumed by organization for there better future requirement."}
                                
                                    image={Consultingbox}
                                    // url={blog.url}
                                    key={1}
                                    id={1}
                                />
                                <SingleBlog 
                                    // theme={theme}
                                    title={"IT Services"}
                                    desc={"The digital revolution has made it crucial for businesses to reconstruct and upgrade their infrastructure and operations. We deliver innovations in Information Infrastructure, Availability, Networking, Security and Services. "}
                                  
                                    image={Itbox}
                                    // url={blog.url}
                                    key={2}
                                    id={2}
                                />
                                <SingleBlog 
                                    // theme={theme}
                                    title={"Staffing Services"}
                                    desc={"MINDCOM provides the management of essential operation components, such as policies, processes, equipment, data. Our access to a large database of staffing resources is backed by time-tested HR management system."}
                                    image={Staffingbox}
                                    // url={blog.url}
                                    key={3}
                                    id={3}
                                />
                                <SingleBlog 
                                    // theme={theme}
                                    title={"Engineering Services"}
                                    desc={"MINDCOM is experienced in developing and maintaining products. We have carved out our experiences and provides specialized consulting services to help clients bring products or technology to market."}
                                    date={"ydxg egx ediibe hs ae"}
                                    image={Engineeringbox}
                                    // url={blog.url}
                                    key={4}
                                    id={4}
                                />
                        </div> 
                         
                    </div>
                </div>
            

        </>
    )
}

export default Blog
