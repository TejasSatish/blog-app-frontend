import axios from "axios"
import React,{ useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
export default function Blog(){
    const [blogs, setBlogs] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3001/blogs")
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
                (blog,i)=>{
                    return(
                        <div class="row row-cols-1 g-3" key={i}>
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <h3 className="mb-0">{ blog.postName }</h3>
                                    <small class="text-body-secondary">{ blog.authorName }</small>
                                    <p class="card-text">{ blog.text }</p>
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