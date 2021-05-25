import React from 'react';

import Header from './Landing-component/Header.js';
import Archive from './Landing-component/Archive.js';
import About from './Landing-component/About.js';
import Gallery from './Landing-component/Gallery.js';
import Contact from './Landing-component/Contact.js';


function Landing() {
    return (
        <div>
            
            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />

        </div>
    )
}
    
export default Landing;