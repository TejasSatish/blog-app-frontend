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
        <div class="container">
            <header class="blog-header lh-1 py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-1">
                    <a class="link-secondary" href="#">Subscribe</a>
                </div>
                <div class="col-4 text-center">
                    <h2 class="blog-header-logo text-body-emphasis">Blog App</h2>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit"onClick={displayBlogs}>Search</button>
                    </form>
                </div>
                </div>
            </header>
            <hr></hr>
        </div>
    )
}