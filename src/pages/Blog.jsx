import React from 'react';
import { useParams,useLocation } from 'react-router-dom'; //receive perams from router - binding data.
import { useState, useEffect } from 'react';
import { blogData } from "./../data";

function Blog() {
    const { title } = useParams(); //we get all router params | varibale data from here .... pass from blogs.jsx 

    const location = useLocation() //useLocation receive params from state={{id,title,body}} from blogs.jsx component.

    console.log(location)

    //-------------------------alternative from useLocation-----------------------------------------
    // const [bodyData, setBodyData] = useState(""); // Changed variable name to 'bodyData'

    // useEffect(() => {
    //     const filteredBlog = blogData.filter((blog) => blog.title === title);
    //     setBodyData(filteredBlog[0].body);
    // }, [title]);
    //------------------------------------------------------------------

    return (
        <div>
            <h2>{title}</h2>
            {/* <p>{bodyData.slice(0, 500)}</p>
            <p>{bodyData.slice(501, 580)}</p> */}

            {/* useLocation  */}
            <p>{location.state.body.slice(0,500)}</p>
        </div>
    );
}

export default Blog;
