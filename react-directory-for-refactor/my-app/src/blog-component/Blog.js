import React from 'react';

import Header from './Header.js';
import Article from './Article.js';
import Sidebar from './Sidebar.js';
import Comment from './Comment.js';


function Blog() {
    return (
        <>

            <Header />

            <div className="wrap grid-wrapper">
                    <Article />
                    <Sidebar />
            </div>

            <Comment />

        </>
    )
}
    
export default Blog;