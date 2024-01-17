import React from 'react'
// import Fade from 'react-reveal/Fade';

// import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        // <Fade bottom>
        <div >

            <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: "white"}}>
                <div className="singleBlog--image" style={{backgroundColor: "blue"}}>
                    <img src={image ? image : " "} alt={title} />
                </div>
                <div className="singleBlog--body">
                    <h3 className='text-center text-sky-900 font-semibold'>{title}</h3>
                    <p className='text-justify text-sky-900' >{desc}</p>
                </div>
            </a>
        </div>
        // </Fade>
    )
}

export default SingleBlog
