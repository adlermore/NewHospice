import React from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Blog/_blog.scss';
import blog1 from '../assets/img/blog1.png';
import blog2 from '../assets/img/blog2.png';
import blog3 from '../assets/img/blog3.png';

const Blog = () => {
    return (
        <div className="blog_wrapper">
            <div className="custom_container">
                <div className="section_title center_mode">Blog</div>
                <div className="blog_list">
                    <div className="blog_block">
                        <div className="image_block">
                            <img src={blog1} alt="blogImg" />
                        </div>
                        <div className="blog_info">
                            <div className="blog_title">
                                Who Can Receive Hospice Care?
                            </div>  
                            <div className="blog_description">
                                "New Hope Hospice Care: Illuminating the path with compassionate 
                                support and personalized care. We are dedicated to creating a 
                                haven of comfort, dignity, and hope for individuals and their 
                                families during life's most delicate moments.
                                <br />
                                <br />
                                Our commitment is to provide heartfelt, expert care that embraces 
                                each unique journey, fostering an environment where every moment is meaningful. 
                            </div>
                        </div>
                    </div>
                    <div className="blog_block">
                        <div className="image_block">
                            <img src={blog2} alt="blogImg" />
                        </div>
                        <div className="blog_info">
                            <div className="blog_title">
                                Who Chooses My Provider (Hospice Agency)?
                            </div>  
                            <div className="blog_description">
                                "New Hope Hospice Care: Illuminating the path with compassionate 
                                support and personalized care. We are dedicated to creating a 
                                haven of comfort, dignity, and hope for individuals and their 
                                families during life's most delicate moments.
                                <br />
                                <br />
                                Our commitment is to provide heartfelt, expert care that embraces 
                                each unique journey, fostering an environment where every moment is meaningful. 
                            </div>
                        </div>
                    </div>
                    <div className="blog_block">
                        <div className="image_block">
                            <img src={blog3} alt="blogImg" />
                        </div>
                        <div className="blog_info">
                            <div className="blog_title">
                                Who Chooses My Provider (Hospice Agency)?
                            </div>  
                            <div className="blog_description">
                                "New Hope Hospice Care: Illuminating the path with compassionate 
                                support and personalized care. We are dedicated to creating a 
                                haven of comfort, dignity, and hope for individuals and their 
                                families during life's most delicate moments.
                                <br />
                                <br />
                                Our commitment is to provide heartfelt, expert care that embraces 
                                each unique journey, fostering an environment where every moment is meaningful. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SupportChat />
        </div>
    )
}

export default Blog;