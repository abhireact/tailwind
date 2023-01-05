import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import './Blog.css';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';


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
                        <div className="blog--bodyContainer">
                            {/* {blogData.slice(0, 3).reverse().map(blog => ( */}
                                <SingleBlog 
                                    // theme={theme}
                                    title={"Bedanta"}
                                    desc={"djxeeeeee eeeee eeeeeeeee eeex se3jh"}
                                    date={"ydxg egx ediibe hs ae"}
                                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4I5QRbLgzZK48-JaTX3atZrgJLkN8qCg2CA&usqp=CAU"}
                                    // url={blog.url}
                                    key={1}
                                    id={1}
                                />
                                <SingleBlog 
                                    // theme={theme}
                                    title={"Bedanta"}
                                    desc={"djxeeeeee eeeee eeeeeeeee eeex se3jh"}
                                    date={"ydxg egx ediibe hs ae"}
                                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh340NmDPEAK3gUIZbOnimdQ9SWEMC2Q8VNw&usqp=CAU"}
                                    // url={blog.url}
                                    key={2}
                                    id={2}
                                />
                                <SingleBlog 
                                    // theme={theme}
                                    title={"Bedanta"}
                                    desc={"djxeeeeee eeeee eeeeeeeee eeex se3jh"}
                                    date={"ydxg egx ediibe hs ae"}
                                    image={"https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75"}
                                    // url={blog.url}
                                    key={3}
                                    id={3}
                                />
                        </div> 
                         
                    </div>
                </div>
            

        </>
    )
}

export default Blog
