import React from 'react';

import Header from './landing-page-component/Header.js';
import Archive from './landing-page-component/Archive.js';
import About from './landing-page-component/About.js';
import Gallery from './landing-page-component/Gallery.js';
import Contact from './landing-page-component/Contact.js';


function Landing() {
    return (
        <>

            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />

        </>
    )
}
    
export default Landing;