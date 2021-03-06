import React from 'react';

// Double check this to make sure it's pulling from the public folder
import '../blog.css';

function Footer() {
    return (
        <div>

            <footer>
                <div class="wrap">
                    <div class="social-links">
                        <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                    <input type="text" placeholder="Email Address">
                    <button type="submit">Keep in Touch</button>
                </div>

                <p class="copyright">&copy;2016 Sarah Holden</p>
            </footer>

        </div>
    )
}
    
export default Footer;