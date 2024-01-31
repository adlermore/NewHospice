import React from 'react';
import heroImg from '../assets/img/heroImg.png';
import service1 from '../assets/img/service1.png';
import service2 from '../assets/img/service2.png';
import service3 from '../assets/img/service3.png';
import service4 from '../assets/img/service4.png';
import service5 from '../assets/img/service5.png';
import service6 from '../assets/img/service6.png';
import service7 from '../assets/img/service7.png';
import service8 from '../assets/img/service8.png';
import service9 from '../assets/img/service9.png';
import service10 from '../assets/img/service10.png';
import service11 from '../assets/img/service11.png';
import service12 from '../assets/img/service12.png';
import '../assets/scss/HomePage/_homePage.scss';
import SupportChat from '../components/SupportChat/SupportChat';
import { Link } from 'react-router-dom';

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
                <div className="services_list">
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service1} alt='serviceImg' />
                            <span className="service_title">
                                Skilled nursing care
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service2} alt='serviceImg' />
                            <span className="service_title">
                                Scheduled visits
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service3} alt='serviceImg' />
                            <span className="service_title">
                                Medication delivery
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service4} alt='serviceImg' />
                            <span className="service_title">
                             Medical supplies  & equipment
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service5} alt='serviceImg' />
                            <span className="service_title">
                             Pain & symptom  management 
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service6} alt='serviceImg' />
                            <span className="service_title">
                                Wound  care
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service7} alt='serviceImg' />
                            <span className="service_title">
                                Podiatry services
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service8} alt='serviceImg' />
                            <span className="service_title">
                                Personal  care aides
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service9} alt='serviceImg' />
                            <span className="service_title">
                                Continuous care  & respite care
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service10} alt='serviceImg' />
                            <span className="service_title">
                                Counseling services
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service11} alt='serviceImg' />
                            <span className="service_title">
                                Emotional &  spiritual support
                            </span>
                        </Link>
                    </div>
                    <div className="serbvice_block">
                        <Link to="/#" >
                            <img src={service12} alt='serviceImg' />
                            <span className="service_title">
                                Bereavement services
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="team_section page_section">
                <div className="custom_container">
                    <div className="section_title center_mode">Our Team</div>
                    <div className="section_description center_mode">
                        "Explore the skilled professionals at New Hope Hospice Care. Discover the expertise 
                        of our team, including experienced nurses, compassionate social workers, and 
                        dedicated spiritual counselors. Learn more about the professions that form the 
                        heart of our hospice and ensure personalized, compassionate care for you and 
                        your loved ones."
                    </div>
                </div>
            </div>
            <SupportChat />
        </div>
    )
}

export default HomePage;