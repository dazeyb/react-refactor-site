import React, { Component } from 'react';

import logo from './logo.svg';

// import './App.css';
// import './style.css';
// import './blog.css';

import BlogPage from './Blog.js';



class BlogPage extends Component {
  constructor() {
    super();
    console.log("BlogPage.js: In constructor()");
  }

  componentDidMount() {
    console.log('BlogPage.js In componentDidMount()');
  }

  // componentDidUpdate(prevProps) {
  //   console.log(`Home.js: In componentDidUpdate(). prevProps: ${JSON.stringify(prevProps)}`);
  // }

  componentWillUnmount() {
    console.log('Home.js: In componentWillUnmount()');
  }

  render() {
    console.log("BlogPage.js: In render()");
    return (
      <div className="App">

        <NavBar />
        <Blog />
        <Footer />

    </div>
    )
  }

}
export default BlogPage;
