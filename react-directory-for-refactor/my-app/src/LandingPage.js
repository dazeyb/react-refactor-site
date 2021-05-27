import React, { Component } from 'react';

import logo from './logo.svg';

// import './App.css';
import './style.css';
import './landing.css';

import NavBar from './landing-page-component/NavBar.js';
import Landing from './landing-page-component/Landing.js';
import Footer from './landing-page-component/Footer.js';



function LandingPage () {
    return (

      <>
        <NavBar />
        <Landing />
        <Footer />
      </>  

  )
}


export default LandingPage;
