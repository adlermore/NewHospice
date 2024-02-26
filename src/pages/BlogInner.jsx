import React, { useState, useEffect } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/BlogInner/_blogInner.scss';
import { motion } from "framer-motion";
import request from '../components/Request/request';
import PageLoader from '../components/PageLoader/PageLoader';
import blogInnerImg from '../assets/img/bloginnerimg.png';
import shareVector from '../assets/img/Vectorshare.png'
import { FacebookShareButton  ,LinkedinShareButton } from 'react-share';


const BlogInner = () => {

    const [blogInnerData, setBlogInnerData] = useState({});
    const [isLoadSuccess, setLoadSuccess] = useState(false);

    useEffect(() => {
        request(`https://hospis.dev.itfabers.com/api/blog/1`)
            .then((blogData) => {
                setBlogInnerData(blogData.data);
                setTimeout(() => {
                    setLoadSuccess(true)
                }, 500);
            })
            .catch(error => {
                console.log(error);
            })
    },[])

    console.log(blogInnerData);
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
                <div className="section_title center_mode">Health and Wellness for Families</div>
                <div className="blog_date">02.19.2024</div>
            </div>
            <div className="blogInner_image">
                <img src={blogInnerImg} alt="" />
            </div>
            <div className="custom_container">
                <div className="blog_inner">
                    <div className="blog_description section_description">
                        In today's fast-paced world, maintaining the health and 
                        wellness of our families is more important than ever. 
                        With so many demands pulling us in different directions, 
                        it's easy to let self-care fall by the wayside. However, 
                        prioritizing the well-being of our loved ones can have a 
                        profound impact on their overall quality of life.
                        <br />
                        <br />
                        <br />
                        In today's fast-paced world, maintaining the health and 
                        wellness of our families is more important than ever. 
                        With so many demands pulling us in different directions, 
                        it's easy to let self-care fall by the wayside. However, 
                        prioritizing the well-being of our loved ones can have a 
                        profound impact on their overall quality of life.
                    </div>
                </div>
                <div className="article_line">
                    <div className="article_block">
                        Article created by <span className='author_article'>Artur Karagyan </span> 
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