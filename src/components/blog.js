import axios from "axios"
import React,{ useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
export default function Blog(){
    const [blogs, setBlogs] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3001/blogs/get")
                .then((res)=>{
                    setBlogs(blogs.concat(res.data))
                    console.log(res.data)
                  })
                .catch((err)=>{
                  console.log(err)
                })
    },[])

    return (
        
        <div class="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 " >
            { blogs.map(
                (blog)=>{

                    const text=blog.text.slice(0,20)
                    return(
                        <div class="row row-cols-1 g-3" key={blog._id}>
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={blog.image} alt="Thumbnail" width="100%" height="225"  preserveAspectRatio="xMidYMid slice" focusable="false">
                                </img>
                                <div class="card-body">
                                    <h3 className="mb-0">{ blog.postName }</h3>
                                    <small class="text-body-secondary">{ blog.authorName }</small>
                                    <p class="card-text">{ text }</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        </div>
                                        <small class="text-body-secondary">{ blog.createdAt }</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
            </div>
        </div>
    )
}