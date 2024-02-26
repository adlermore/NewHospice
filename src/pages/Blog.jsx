import React, { useState, useEffect } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Blog/_blog.scss';
import { motion } from "framer-motion";
import request from '../components/Request/request';
import PageLoader from '../components/PageLoader/PageLoader';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const Blog = () => {

    const [blogData, setBlogData] = useState({});
    const [pageinationData, setPageinationData] = useState({});
    const [isLoadSuccess, setLoadSuccess] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        request(`https://hospis.dev.itfabers.com/api/blog/${page}`)
            .then((blogData) => {
                setBlogData(blogData.data);
                setPageinationData(blogData.pagination);
                setTimeout(() => {
                    setLoadSuccess(true)
                }, 500);
            })
            .catch(error => {
                console.log(error);
            })
    }, [page])


    const handlePageChange = (e, pageNumber) => {
        e.preventDefault();
        setLoadSuccess(false);
        const element = document.getElementById('blog_list');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (
            pageNumber > 0 &&
            pageNumber <= 10 &&
            pageNumber !== page
        ) {
            setTimeout(() => {
                setPage(pageNumber);
            }, 700);
        }
    };

    if (!isLoadSuccess) {
        return <PageLoader />
    }

    return (
        <motion.div className="blog_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                <div className="section_title center_mode">Blog</div>
                <div className="blog_list" id="blog_list">
                    {blogData &&
                        blogData.data.map((blog, index) => (
                            <div key={index} className="blog_block">
                                <div className="image_block">
                                    <img src={blog.image} alt="blogImg" />
                                </div>
                                <div className="blog_info">
                                    <Link to={`/blogInner/${blog.id}`} className="blog_title">
                                        {blog.title}
                                    </Link>
                                    <div className="blog_description">
                                        {blog.description}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="pagination_section">
                        <Pagination >
                            <Pagination.Prev onClick={(e) => {
                                handlePageChange(e, page - 1)
                            }}
                                disabled={page === 1 ? true : false}
                            />
                            {[...Array(Math.floor(pageinationData.total))].map((_, i) => (
                                <Pagination.Item
                                    active={page === i + 1 ? true : false}
                                    key={i + 1}
                                    onClick={(e) => handlePageChange(e, i + 1)}
                                >{i + 1}</Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={(e) => {
                                    handlePageChange(e, page + 1)
                                }}

                                disabled={page === Math.floor(10) ? true : false}
                            />
                        </Pagination>
                    </div>
                </div>
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default Blog;