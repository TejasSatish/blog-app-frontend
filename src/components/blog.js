import axios from "axios"
import React,{ useState, useEffect } from "react";
export default function Restaurant(){
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        getBlogs();
    },[])
    
    const getBlogs= ()=>{
        axios.get("http://localhost:3001/blogs")
                .then((res)=>{
                    setBlogs(blogs.concat(res.data))
                    console.log(res.data)
                  })
                .catch((err)=>{
                  console.log(err)
                })
    }

    return (
        <div>
            <button onClick={getBlogs}>Get</button>
            { blogs.map(
                blog=>(
                    <div key={blog.postName}>
                        { blog }
                    </div>
                )
            )}
        </div>
    )
}