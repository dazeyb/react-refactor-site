import React from 'react';

import Header from './Header.js';
import Article from './Article.js';
import Sidebar from './Sidebar.js';
import Comment from './Comment.js';


function Blog() {
    return (
        <section>

            <Header />
            <Article />
            <Sidebar />
            <Comment />

        </section>
    )
}
    
export default Blog;