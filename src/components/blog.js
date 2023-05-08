import axios from "axios"
import React,{ useState, useEffect } from "react";
export default function Restaurant(){
    const [blogs, setBlogs] = useState([]);

    
    
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
                (blog,i)=>{
                return(
                    <div key={i}>
                    { blog.postName }<br></br>
                    { blog.authorName }<br></br>
                    { blog.createdAt }<br></br>
                    { blog.text }<br></br>
                    </div>
                )
                }
            )}
        </div>
    )
}