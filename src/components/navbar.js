import React from "react";
import axios from "axios";
import Blog from "./blog"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar(){
    function displayBlogs(){
        return 
    }

    return(
        <div className="container">
            <header className="blog-header lh-1 py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <h1 className="blog-header-logo text-body-emphasis">Blog App</h1>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a class="p-2 link-secondary">Login</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit"onClick={displayBlogs}>Search</button>
                        </form>
                    </div>
                </div>
            </header>
            <hr></hr>
            <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <a class="p-2 link-secondary" >Home</a>
                    <a class="p-2 link-secondary" >Your Posts</a>
                    <a class="p-2 link-secondary" >Logout</a>
                </nav>
            </div>
            <hr></hr>
        </div>
    )
}