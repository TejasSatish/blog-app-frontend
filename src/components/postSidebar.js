import axios from "axios"
import React,{ useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function PostSidebar(){
    const [blogs, setBlogs] = useState([]);
    const [blogsLength, setBlogsLength] = useState(null);

    useEffect(()=>{
        setBlogs([])
        getBlogs()
        setBlogsLength(blogs.length)
    },[blogsLength])

    const getBlogs=()=>{
        axios.get("http://localhost:3001/blogs")
                .then((res)=>{
                    setBlogs(blogs.concat(res.data))
                    console.log(res.data)
                  })
                .catch((err)=>{
                  console.log(err)
                })
    }

    const delPostEvent=(e)=>{
        const id=e.currentTarget.id;
        console.log(id)
        deletePost(id)
        setBlogsLength(blogs.length - 1)
    }
    const deletePost=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:3001/blogs/${id}`)
    }

    return(
        <div class="col-md-2" onLoad={getBlogs}>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Your posts</span>
                <a class="link-secondary"   aria-label="Add a new report">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg><p>{}</p>
                </a>
            </h6>
            <ul class="nav flex-column md-4">
            {blogs.map(
                (blog)=>{
                    return(
                        <li class="nav-item d-flex gap-2 mb-3" key={blog._id}>
                        <a class="nav-link"  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        {blog.postName}
                        </a>
                        <button type="button" class="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"></path>
                            </svg>
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={ delPostEvent } id={blog._id}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                            </svg>
                        </button>
                        </li>
                    )
                }
            )}
            
            
            </ul>
        </div>
    )
}