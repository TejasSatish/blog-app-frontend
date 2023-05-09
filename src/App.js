
import React, { useEffect, useState } from "react";
import Blog from "./components/blog";
import Navbar from "./components/navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Blog></Blog>
    </div>
  );
}

export default App;
