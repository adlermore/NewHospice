import React, { useState, useEffect, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Blog/_blog.scss';
import { motion } from "framer-motion";
import request from '../components/Request/request';
import PageLoader from '../components/PageLoader/PageLoader';

const Blog = () => {

    const isMounted = useRef(true);
    const [blogData, setBlogData] = useState({})
    const [isLoadSuccess, setLoadSuccess] = useState(false)


    useEffect(() => {
        if (isMounted.current) {
            request(`https://hospis.dev.itfabers.com/api/blog/1`)
                .then((blogData) => {
                    setBlogData(blogData.data);
                    setTimeout(() => {
                        setLoadSuccess(true)
                    }, 500);
                    console.log(blogData);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        return () => {
            isMounted.current = false;
        };

    }, [blogData])

    if (!isLoadSuccess) {
        return <PageLoader />
    }

    return (
        <motion.div className="blog_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} թ
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                <div className="section_title center_mode">Blog</div>
                <div className="blog_list">
                    {blogData &&
                        blogData.data.map((blog, index) => (
                            <div key={index} className="blog_block">
                                <div className="image_block">
                                    <img src={blog.image} alt="blogImg" />
                                </div>
                                <div className="blog_info">
                                    <div className="blog_title">
                                        {blog.title}
                                    </div>
                                    <div className="blog_description">
                                       {blog.description}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default Blog;