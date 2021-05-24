import React from 'react';

// Double check this to make sure it's pulling from the public folder
import '/css/blog.css';

function Header() {
    return (
        <div>
            <header class="vertical-center">
                <div>
                    <h1><a href="index.html">Monument</a></h1>
                </div>
            </header>
        </div>
    )
}
    
export default Header;