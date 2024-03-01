import React, { useState, useEffect } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/BlogInner/_blogInner.scss';
import { motion } from "framer-motion";
import request from '../components/Request/request';
import PageLoader from '../components/PageLoader/PageLoader';
// import blogInnerImg from '../assets/img/bloginnerimg.png';
import shareVector from '../assets/img/Vectorshare.png'
import { FacebookShareButton  ,LinkedinShareButton } from 'react-share';

const BlogInner = () => {

    const [blogInnerData, setBlogInnerData] = useState({});
    const [blogDate, setBlogDate] = useState(null);
    const [isLoadSuccess, setLoadSuccess] = useState(false);

    useEffect(() => {

        const path = window.location.href;
        const parts = path.split("/");
        let BlogSlug = parts.slice(parts.indexOf("blogInner") + 1).join("/");        
        request(`https://hospis.dev.itfabers.com/api/post/${BlogSlug}`)
            .then((blogData) => {
                setBlogInnerData(blogData.data);
                setBlogDate(new Date(blogData.data.created_at))
                setTimeout(() => {
                    setLoadSuccess(true)
                }, 500);
            })
            .catch(error => {
                console.log(error);
            })
    },[])

    if (!isLoadSuccess) {
        return <PageLoader />
    }

    return (
        <motion.div className="blog_inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                <div className="section_title center_mode">{blogInnerData.title}</div>
                <div className="blog_date">{`${blogDate.toLocaleDateString()}`}</div>
            </div>
            <div className="blogInner_image">
                <img src={blogInnerData.image} alt="BlogInnerImg" />
            </div>
            <div className="custom_container">
                <div className="blog_inner">
                    <div className="blog_description section_description">
                     {blogInnerData.description}
                    </div>
                </div>
                <div className="article_line">
                    <div className="article_block">
                        Article created by <a href='https://www.linkedin.com/in/arturkaragyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'target='blank' className='author_article'> Artur Karagyan </a> 
                    </div>
                    <div className="share_line">
                        Share to <img src={shareVector} alt="vector" />
                        <div className="social_list">
                        <FacebookShareButton url='http://localhost:3000/blogInner/1' >  <a target='blank' href="#/" className="icon-fb"> </a></FacebookShareButton>
                        {/* <a target='blank' href="https://www.instagram.com/newhopehospicecare/?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" className="icon-insta"> </a> */}
                        <LinkedinShareButton url='http://localhost:3000/blogInner/1' >
                        <a target='blank' href='/#' className="icon-linkedin"> </a>
                        </LinkedinShareButton>
                    </div>
                    </div>
                </div>
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default BlogInner;