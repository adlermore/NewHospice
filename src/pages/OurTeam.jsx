import React, { useEffect } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/OurTeam/_ourTeam.scss';
import team1 from '../assets/img/teamImg1.png';
import team2 from '../assets/img/teamImg2.png';
import team3 from '../assets/img/teamImg3.png';
import team4 from '../assets/img/teamImg4.png';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const Services = () => {

    let navigate = useNavigate();

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        let desiredPart = parts.slice(parts.indexOf("team") + 1).join("/");
        const element = document.getElementById(desiredPart);
        if (desiredPart === 'all') {
            document.body.scrollIntoView({ behavior: 'smooth' });
        } else if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    }, [navigate])

    return (
        <motion.div className="team_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                <div className="section_title center_mode">Our Team</div>
            </div>
            <div className="team_list page_section ">
                <div className="team_block second_bg  " id="team1">
                    <div className="custom_container">
                        <div className="image_block" style={{ backgroundImage: `url(${team1})` }}></div>
                        <div className="team_info">
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
                        </div>
                    </div>
                </div>
                <div className="team_block second_bg  " id="team2">
                    <div className="custom_container">
                        <div className="image_block" style={{ backgroundImage: `url(${team2})` }}></div>
                        <div className="team_info">
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
                        </div>
                    </div>
                </div>
                <div className="team_block second_bg  " id="team3">
                    <div className="custom_container">
                        <div className="image_block" style={{ backgroundImage: `url(${team3})` }}></div>
                        <div className="team_info">
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
                        </div>
                    </div>
                </div>
                <div className="team_block second_bg  " id="team4">
                    <div className="custom_container">
                        <div className="image_block" style={{ backgroundImage: `url(${team4})` }}></div>
                        <div className="team_info">
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