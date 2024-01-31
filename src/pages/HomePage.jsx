import React from 'react';
import heroImg from '../assets/img/heroImg.png';
import '../assets/scss/HomePage/_homePage.scss';
import SupportChat from '../components/SupportChat/SupportChat';

const HomePage = () => {

    return (
        <div className="homepage_wrapper">
            <div className="hero_section">
                <img src={heroImg} alt='heroImg' />
                <div className="custom_container">
                    <div className="banner_info">
                        <p className='info_desc'>Where Love and care never end...</p>
                        <div className="baner_btn site_btn">About hospice</div>
                    </div>
                </div>
            </div>
            <div className="about_section second_bg page_section">
                <div className="custom_container">
                    <div className="section_title center_mode">Who we are?</div>
                    <div className="section_description center_mode">
                        "New Hope Hospice Care: Providing individualised care and compassionate assistance to
                        illuminate the road. Our mission is to provide people and their families with a
                        sanctuary of hope, dignity, and comfort throughout the most vulnerable times of
                        life. Our goal is to create an atmosphere where each moment has significance by
                        offering compassionate, knowledgeable care that celebrates each individual
                        journey. At New Hope, we serve as a guiding light of comfort, offering people
                        and the people they love constant support, understanding, and respect as they
                        navigate the latter chapters of their lives."
                    </div>
                </div>
            </div>
            <div className="services_section page_section">
                <div className="custom_container">
                    <div className="section_title center_mode">Our Services</div>

                </div>
            </div>
            <SupportChat />
        </div>
    )
}

export default HomePage;