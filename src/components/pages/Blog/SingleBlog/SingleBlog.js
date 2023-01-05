import React from 'react'
// import Fade from 'react-reveal/Fade';

// import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        // <Fade bottom>
        <div>

            <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: "white"}}>
                <div className="singleBlog--image" style={{backgroundColor: "blue"}}>
                    <img src={image ? image : " "} alt={title} />
                </div>
                <div className="singleBlog--body">
                    <p style={{color: "black"}}>{date}</p>
                    <h3 style={{color:"black"}}>{title}</h3>
                    <h6 style={{color:"black"}}>{desc}</h6>
                </div>
            </a>
        </div>
        // </Fade>
    )
}

export default SingleBlog
