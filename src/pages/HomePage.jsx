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
import teamImg1 from '../assets/img/teamImg1.png';
import teamImg2 from '../assets/img/teamImg2.png';
import teamImg3 from '../assets/img/teamImg3.png';
import teamImg4 from '../assets/img/teamImg4.png';
import teamImg5 from '../assets/img/teamImg5.png';
import teamImg6 from '../assets/img/teamImg6.png';
import teamImg7 from '../assets/img/teamImg7.png';
import teamImg8 from '../assets/img/teamImg8.png';
import person1 from '../assets/img/person1.png';
import person2 from '../assets/img/person2.png';
import person3 from '../assets/img/person3.png';
import person4 from '../assets/img/person4.png';
import '../assets/scss/HomePage/_homePage.scss';
import SupportChat from '../components/SupportChat/SupportChat';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {

    const settingsSlider = {
        dots: false,
        infinite: true,
        centerPadding: "35px",
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    initialSlide: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

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
                <div className="team_container second_bg page_section">
                    <div className="custom_container">
                        <div className="team_list">
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg1} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Hospice Medical Director
                                    </span>
                                </Link>
                            </div>
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg2} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Attending Physiciant
                                    </span>
                                </Link>
                            </div>
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg3} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Registered Nurse
                                    </span>
                                </Link>
                            </div>
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg4} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Certified Nursing Assistant
                                    </span>
                                </Link>
                            </div>
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg5} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Medical Social Worker
                                    </span>
                                </Link>
                            </div>
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg6} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Hospice Chaplains
                                    </span>
                                </Link>
                            </div>
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg7} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Bereavement Counselors
                                    </span>
                                </Link>
                            </div>
                            <div className="team_block">
                                <Link to="/#">
                                    <span className='team_img'>
                                        <img src={teamImg8} alt='teamImg' />
                                    </span>
                                    <span className="team_title">
                                        Hospice Volunteers
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team_slider">
                    <div className="custom_container">
                        <div className="slider_inner">
                        <Slider {...settingsSlider}>
                            <div className='team_slide'>
                                <div className="slide_content">
                                    <div className="slider_image">
                                        <img src={person1} alt="teamImg" />
                                    </div>
                                    <div className="person_name">Olivia  Johnson</div>
                                    <div className="person_possiton">Registered nurse</div>
                                </div>
                            </div>
                            <div className='team_slide'>
                                <div className="slide_content">
                                    <div className="slider_image">
                                        <img src={person2} alt="teamImg" />
                                    </div>
                                    <div className="person_name">Olivia  Johnson</div>
                                    <div className="person_possiton">Medical director</div>
                                </div>
                            </div>
                            <div className='team_slide'>
                                <div className="slide_content">
                                    <div className="slider_image">
                                        <img src={person3} alt="teamImg" />
                                    </div>
                                    <div className="person_name">Olivia  Johnson</div>
                                    <div className="person_possiton">Attending  Physiciant</div>
                                </div>
                            </div>
                            <div className='team_slide'>
                                <div className="slide_content">
                                    <div className="slider_image">
                                        <img src={person4} alt="teamImg" />
                                    </div>
                                    <div className="person_name">Olivia  Johnson</div>
                                    <div className="person_possiton">Nursing Assistant</div>
                                </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <SupportChat />
        </div>
    )
}

export default HomePage;