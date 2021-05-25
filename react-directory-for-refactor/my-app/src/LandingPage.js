import React, { Component } from 'react';

import logo from './logo.svg';

// import './App.css';
import './style.css';
import './landing.css';

import NavBar from './Landing-component/NavBar.js';
import Landing from './Landing-component/Landing.js';
import Footer from './Landing-component/Footer.js';




class LandingPage extends Component {
  constructor() {
    super();
    console.log("LandingPage.js: In constructor()");
  }

  componentDidMount() {
    console.log('LandingPage.js In componentDidMount()');
  }

  // componentDidUpdate(prevProps) {
  //   console.log(`Home.js: In componentDidUpdate(). prevProps: ${JSON.stringify(prevProps)}`);
  // }

  componentWillUnmount() {
    console.log('Home.js: In componentWillUnmount()');
  }

  render() {
    console.log("LandingPage.js: In render()");
    return (
      <div className="App">

        <NavBar />
        <Landing />
        <Footer />

    </div>
    )
  }

}
export default LandingPage;
