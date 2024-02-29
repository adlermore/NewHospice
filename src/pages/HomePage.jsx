import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import '../assets/scss/HomePage/_homePage.scss';
import SupportChat from '../components/SupportChat/SupportChat';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MapContainer from '../components/MapContainer/MapContainer';
import PageLoader from '../components/PageLoader/PageLoader';
import request from "../components/Request/request";

const HomePage = () => {

    const [isLoadSuccess, setIsLoadSuccess] = useState(false);
    const [homeData, setHomeData] = useState({});

    useEffect(() => {
        request(`https://hospis.dev.itfabers.com/api/page/home`)
            .then((home) => {
                setHomeData(home.data.page_content);
                setTimeout(() => {
                    setIsLoadSuccess(true);
                }, 500);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    if (!isLoadSuccess) {
        return <PageLoader />
    }

    return (
        <motion.div className="homepage_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="hero_section">
                <img src={homeData.Banner.BackgroundImage} alt='heroImg' />
                <div className="custom_container">
                    <div className="banner_info">
                        <p className='info_desc'>{homeData.Banner.Title}</p>
                        <Link to='aboutUs/' className="baner_btn site_btn">{homeData.Banner.ButtonText}</Link>
                    </div>
                </div>
            </div>
            <div className="about_section second_bg page_section">
                <div className="custom_container">
                    <div className="section_title center_mode">{homeData.AboutUS.Title}</div>
                    <div className="section_description center_mode">{homeData.AboutUS.Description}</div>
                </div>
            </div>
            <div className="services_section page_section">
                <div className="custom_container">
                    <div className="section_title center_mode">{homeData.Services.Title}</div>
                </div>
                <div className="services_list">
                    {homeData.Services.OurServices.map((service , index) =>(
                        <div  key={index} className="serbvice_block">
                            <Link to={`services/service${service.ID}`} >
                                <img src={service.Image} alt='serviceImg' />
                                <span className="service_title">
                                    {service.Name} 
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="team_section page_section">
                <div className="custom_container">
                    <div className="section_title center_mode">{homeData.OurTeam.Title}</div>
                    <div className="section_description center_mode">
                        {homeData.OurTeam.Description}
                    </div>
                </div>
                <div className="team_container second_bg page_section">
                    <div className="custom_container">
                        <div className="team_list">
                            {homeData.OurTeam.Members.map((members, index) => (
                                <div key={index} className="team_block">
                                    <Link to={`team/team${members.ID}`}>
                                        <span className='team_img'>
                                            <img src={members.Image} alt='teamImg' />
                                        </span>
                                        <span className="team_title">
                                            {members.Position}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="goals_section  inlineImg_section">
                <div className="inlineImg_container">
                    <div className="image_block absoluite_image">
                        <img src={homeData.DifferentInfo.Image} alt='goalImg' />
                    </div>
                    <div className="goal_info page_section">
                        <div className="info_inner">
                            <div className="section_title ">
                                {homeData.DifferentInfo.Title}
                            </div>
                            <div className="section_description">
                                {homeData.DifferentInfo.Description}
                            </div>
                            <div className="goals_list">
                                {homeData.DifferentInfo.Icons.map((icon, index) => (
                                    <div key={index} className="goal_block">
                                        <div className="goal_img">
                                            <img src={icon.Icon} alt="goalImg" />
                                        </div>
                                        <div className="goal_title">
                                            {icon.Title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certificates_section page_section">
                <div className="custom_container">
                    <div className="section_title center_mode">Our certifications</div>
                    <div className="certificate_list">
                        {homeData.Certifications.map((certificate, index) => (
                            <div key={index} className="certificate_block">
                                <img src={certificate} alt="certificateIMg" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="coverBottom_section">
                <div className="cover_image"><img src={homeData.FooterImage.replace(/\s/g, '')} alt='coverImg' /></div>
            </div>
            <div className="location_section">
                <MapContainer array={[homeData.HomeMap]} isAdding={true} error={false} />
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default HomePage;