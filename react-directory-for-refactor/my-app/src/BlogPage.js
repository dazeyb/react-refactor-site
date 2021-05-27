import React, { Component } from 'react';

import logo from './logo.svg';

// import './App.css';
import './style.css';
import './blog.css';

import NavBar from './blog-component/NavBar.js';
import Blog from './blog-component/Blog.js';
import Footer from './blog-component/Footer.js';


function BlogPage() {
  return (

      <div className="blog-page">

        <NavBar />
        <Blog />
        <Footer />

      </div>
  )
}

export default BlogPage;
