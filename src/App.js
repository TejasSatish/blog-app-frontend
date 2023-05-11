
import React, { useEffect, useState } from "react";
import Blog from "./components/blog";
import Navbar from "./components/navbar";
import UserBlog from "./components/userBlog";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Blog></Blog>}></Route>
        <Route exact path="/blogs" element={<UserBlog></UserBlog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
