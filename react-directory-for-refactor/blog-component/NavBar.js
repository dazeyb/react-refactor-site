import React from 'react';

// Double check this to make sure it's pulling from the public folder
import '/css/blog.css';

function NavBar() {
    return (
            <div>
                <nav>
                    <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
                    <ul>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#gallery">Gallery</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
    )
}

export default NavBar;