import React, { useEffect } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Services/_services.scss';
import serviveInner1 from '../assets/img/serviveInner1.png';
import serviveInner2 from '../assets/img/service3.png';
import serviveInner3 from '../assets/img/service11.png';
import serviveInner4 from '../assets/img/service10.png';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Services = () => {

    let navigate = useNavigate();

    const handleClickSchedul=(e)=>{
        e.preventDefault();
        navigate('/contactUs', { replace: true });
    }

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        let desiredPart = parts.slice(parts.indexOf("services") + 1).join("/");
        const element = document.getElementById(desiredPart);
        if (desiredPart === 'all') {
            document.body.scrollIntoView({ behavior: 'smooth' });
        } else if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    }, [navigate])

    return (
        <motion.div className="services_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                <div className="section_title center_mode">Our Services</div>
            </div>
            <div className="services_list page_section ">
                <div className="goals_section service_block inlineImg_section second_bg" id="service1" >
                    <div className="inlineImg_container">
                        <div className="image_block absoluite_image" style={{ backgroundImage: `url(${serviveInner1})` }}></div>
                        <div className="goal_info page_section">
                            <div className="info_inner">
                                <div className="section_title service_title">
                                    Skilled nursing care
                                </div>
                                <div className="section_description">
                                    "Our hospice's dedication to offering complete assistance for individuals with
                                    life-limiting illnesses is based on our provision of expert nursing care. Our
                                    committed nursing staff puts our patients' physical, emotional, and spiritual
                                    needs first, focusing on their whole well-being.
                                    <br />
                                    <br />
                                    Our qualified nurses are excellent at handling difficult medical conditions,
                                    giving prescriptions, and working with other healthcare professionals to
                                    create individualised care plans. They keep a close eye on any changes
                                    in their patients' health and are experts in pain, symptom control, and
                                    end-of-life care.
                                </div>
                                <div className="buttons_line">
                                    <a href="/#" className="seeMore">See more{">"} </a>
                                    <a href="/#" onClick={(e)=>handleClickSchedul(e)} className="site_btn">Schedul</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goals_section  service_block inlineImg_section second_bg" id="service2" >
                    <div className="inlineImg_container">
                        <div className="image_block absoluite_image" style={{ backgroundImage: `url(${serviveInner2})` }}></div>
                        <div className="goal_info page_section">
                            <div className="info_inner">
                                <div className="section_title service_title">
                                    Scheduled visits
                                </div>
                                <div className="section_description">
                                    Organised Support for Your Mental Well-Being" <br />
                                    At New Hope Hospice Care, we recognize the value of planned visits in ensuring consistent
                                    and dependable care. Our staff is dedicated to keeping a structured and consistent
                                    visitation schedule, giving patients and their families peace of mind.
                                    <br />
                                    <br />
                                    We are able to keep an eye on changing requirements and adjust our compassionate
                                    care accordingly, all while honoring each person's distinctive path, thanks to
                                    these scheduled visits. You can rely on New Hope to be there for you during the
                                    most trying times of life, offering consolation and encouragement."
                                </div>
                                <div className="buttons_line">
                                    <a href="/#" onClick={(e)=>handleClickSchedul(e)} className="site_btn">Schedul</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goals_section  service_block inlineImg_section second_bg" id="service3" >
                    <div className="inlineImg_container">
                        <div className="image_block absoluite_image" style={{ backgroundImage: `url(${serviveInner3})` }}></div>
                        <div className="goal_info page_section">
                            <div className="info_inner">
                                <div className="section_title service_title">
                                    Scheduled visits
                                </div>
                                <div className="section_description">
                                    Organised Support for Your Mental Well-Being" <br />
                                    At New Hope Hospice Care, we recognize the value of planned visits in ensuring consistent
                                    and dependable care. Our staff is dedicated to keeping a structured and consistent
                                    visitation schedule, giving patients and their families peace of mind.
                                    <br />
                                    <br />
                                    We are able to keep an eye on changing requirements and adjust our compassionate
                                    care accordingly, all while honoring each person's distinctive path, thanks to
                                    these scheduled visits. You can rely on New Hope to be there for you during the
                                    most trying times of life, offering consolation and encouragement."
                                </div>
                                <div className="buttons_line">
                                <a href="/#" onClick={(e)=>handleClickSchedul(e)} className="site_btn">Schedul</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goals_section  service_block inlineImg_section second_bg" id="service4" >
                    <div className="inlineImg_container">
                        <div className="image_block absoluite_image" style={{ backgroundImage: `url(${serviveInner4})` }}></div>
                        <div className="goal_info page_section">
                            <div className="info_inner">
                                <div className="section_title service_title">
                                    Scheduled visits
                                </div>
                                <div className="section_description">
                                    Organised Support for Your Mental Well-Being" <br />
                                    At New Hope Hospice Care, we recognize the value of planned visits in ensuring consistent
                                    and dependable care. Our staff is dedicated to keeping a structured and consistent
                                    visitation schedule, giving patients and their families peace of mind.
                                    <br />
                                    <br />
                                    We are able to keep an eye on changing requirements and adjust our compassionate
                                    care accordingly, all while honoring each person's distinctive path, thanks to
                                    these scheduled visits. You can rely on New Hope to be there for you during the
                                    most trying times of life, offering consolation and encouragement."
                                </div>
                                <div className="buttons_line">
                                <a href="/#" onClick={(e)=>handleClickSchedul(e)} className="site_btn">Schedul</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button_block">
                    <button className="more_services">
                        More services {'>'}
                    </button>
                </div>
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default Services;