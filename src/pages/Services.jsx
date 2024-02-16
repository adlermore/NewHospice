import React, { useEffect } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Services/_services.scss';
import serviveInner1 from '../assets/img/serviveInner1.png';
import serviveInner2 from '../assets/img/service3.png';
import serviveInner3 from '../assets/img/service11.png';
import serviveInner4 from '../assets/img/service10.png';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const ServiceData = [
    {
        id: 'service1',
        name : 'Skilled nursing care',
        description : `Our hospice's dedication to offering complete assistance for individuals with life-limiting illnesses is based on our provision of expert nursing care. Our committed nursing staff puts our patients' physical, emotional, and spiritual needs first, focusing on their whole well-being. ${<br />}${<br />} Our qualified nurses are excellent at handling difficult medical conditions, giving prescriptions, and working with other healthcare professionals to create individualised care plans. They keep a close eye on any changes in their patients' health and are experts in pain, symptom control, and end-of-life care.`,
        image : serviveInner1,
    },
    {
        id: 'service2',
        name : 'Skilled nursing care',
        description : "Our hospice's dedication to offering complete assistance for individuals with life-limiting illnesses is based on our provision of expert nursing care. Our committed nursing staff puts our patients' physical, emotional, and spiritual needs first, focusing on their whole well-being. <br /><br /> Our qualified nurses are excellent at handling difficult medical conditions, giving prescriptions, and working with other healthcare professionals to create individualised care plans. They keep a close eye on any changes in their patients' health and are experts in pain, symptom control, and end-of-life care.",
        image : serviveInner2,
    },
    {
        id: 'service3',
        name : 'Skilled nursing care',
        description : "Our hospice's dedication to offering complete assistance for individuals with life-limiting illnesses is based on our provision of expert nursing care. Our committed nursing staff puts our patients' physical, emotional, and spiritual needs first, focusing on their whole well-being. <br /><br /> Our qualified nurses are excellent at handling difficult medical conditions, giving prescriptions, and working with other healthcare professionals to create individualised care plans. They keep a close eye on any changes in their patients' health and are experts in pain, symptom control, and end-of-life care.",
        image : serviveInner3,
    },
    {
        id: 'service4',
        name : 'Skilled nursing care',
        description : "Our hosing with othe' health and are experts in pain, symptom control, and end-of-life care.",
        image : serviveInner4,
    },

]

const Services = () => {

    let navigate = useNavigate();

    const handleClickSchedul=(e)=>{
        e.preventDefault();
        navigate('/contactUs', { replace: true });
    }
    const handleDescDropdown = ( e , serviceId ) => {
        e.preventDefault();
        const descriptionBlock = document.getElementById(serviceId);
        console.log(e.target.classList.add('hide'));
        descriptionBlock.classList.add('active');

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
            {ServiceData.map((service)=>(
               <div key={service.id} className="goals_section service_block inlineImg_section second_bg"  >
                   <div className="inlineImg_container">
                        <div className="image_block absoluite_image" style={{ backgroundImage: `url(${service.image})` }}></div>
                        <div className="goal_info page_section">
                            <div className="info_inner">
                                <div className="section_title service_title">
                                    Skilled nursing care
                                </div>
                                <div className="section_description" style={{ height: "280px", overflow: "hidden" }} id={service.id} >
                                    {service.description}
                                </div>
                                <div className="buttons_line">
                                    {service.description.length > 300 &&
                                        <a href="/#" onClick={(e)=>handleDescDropdown(e , service.id)} className="seeMore">See more{">"} </a>
                                    }
                                    <a href="/#" onClick={(e)=>handleClickSchedul(e)} className="site_btn">Schedul</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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