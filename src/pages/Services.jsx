import React, { useEffect, useState, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Services/_services.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import request from "../components/Request/request";
import PageLoader from '../components/PageLoader/PageLoader';
import { Spinner } from 'react-bootstrap';

const Services = () => {

    const isMounted = useRef(true);
    const moreBtnRef = useRef(null);
    const navigate = useNavigate();

    const [servicesData, setServicestData] = useState(null);
    const [isLoadSuccess, setIsLoadSuccess] = useState(false);
    const [servicePage, setServicePage] = useState(null);
    const [servicesPages, setServicesPages] = useState([]);
    const [descriptionPoint, setdescriptionPoint] = useState(370);

    const handleClickSchedul = (e) => {
        e.preventDefault();
        navigate('/contactUs', { replace: true });
    }

    const handleDescDropdown = (e, serviceId) => {
        e.preventDefault();
        e.target.classList.add('hide')
        const descriptionBlock = document.getElementById(serviceId);
        descriptionBlock.classList.add('active');
    }

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        let desiredPart = parts.slice(parts.indexOf("services") + 1).join("/");
        const currentId = parseInt(desiredPart.match(/\d+/), 10);
        let element;
        setServicePage(Math.ceil(currentId / 4));
        element = document.getElementById(desiredPart);

        if(window.innerWidth <=1440){
            setdescriptionPoint(480)
        }

        if (element) {
            if (desiredPart === 'all') {
                document.body.scrollIntoView({ behavior: 'smooth' });
            } else if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: "center" });
            }
        } else {
            setIsLoadSuccess(false);
            if (isMounted.current) {
                let servicesLink;
                if (desiredPart === 'all') {
                    servicesLink = `https://hospis.dev.itfabers.com/api/services/1`;
                } else {
                    servicesLink = `https://hospis.dev.itfabers.com/api/services/${Math.ceil(currentId / 4)}`
                }
                request(servicesLink)
                    .then((services) => {
                        setServicestData(services.data);
                        const pagesArr = [];
                        for (let i = 1; i <= (Math.ceil(services.data.total / 4) + 1); i++) {
                            if (i !== Math.ceil(currentId / 4)) {
                                pagesArr.push(i);
                            }
                        }
                        setServicesPages(pagesArr)
                        setTimeout(() => {
                            element = document.getElementById(desiredPart);
                            if (desiredPart === 'all') {
                                document.body.scrollIntoView({ behavior: 'smooth' });
                                setServicesPages(pagesArr.filter(item => item !== 1))

                            } else if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: "center" });
                            }
                        }, 600);
                        setTimeout(() => {
                            setIsLoadSuccess(true);
                        }, 500);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }, [navigate, servicePage])

    const moreDataPush = () => {
        moreBtnRef.current.classList.add('loadding');
        if (servicesPages[0] !== undefined) {
            request(`https://hospis.dev.itfabers.com/api/services/${servicesPages[0]}`)
                .then((nextServices) => {
                    setServicestData({
                        ...servicesData,
                        data: servicesData.data.concat(nextServices.data.data)
                    });
                    const removeArray = servicesPages.slice(1);
                    setServicesPages(removeArray);
                    moreBtnRef.current.classList.remove('loadding');
                    if (servicesPages.length < 3) {
                        document.getElementById('moreServicesBtn').style.display = 'none'
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    if (!isLoadSuccess) {
        return <PageLoader />
    }

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
                {servicesData &&
                    servicesData.data.map((service) => (
                        <div key={service.id} id={`service${service.id}`} className="goals_section service_block inlineImg_section second_bg"  >
                            <div className="inlineImg_container">
                                <div className="image_block absoluite_image" style={{ backgroundImage: `url(${service.image.replace(/\s/g, '')})` }}></div>
                                <div className="goal_info page_section">
                                    <div className="info_inner">
                                        <div className="section_title service_title">
                                            {service.title}
                                        </div>
                                        <div className="description_block" id={service.id} >
                                            <div className="section_description"  >
                                                {service.description}
                                            </div>
                                        </div>
                                        <div className="buttons_line">
                                            {service.description.length > descriptionPoint &&
                                                <a href="/#" onClick={(e) => handleDescDropdown(e, service.id)} className="seeMore">See more{">"} </a>
                                            }
                                            <a href="/#" onClick={(e) => handleClickSchedul(e)} className="site_btn">Schedule</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                <div className="button_block" >
                    <button className="more_services" ref={moreBtnRef} onClick={() => moreDataPush()} id='moreServicesBtn'>
                        More services {'>'}
                        <Spinner animation="border" variant='info' />
                    </button>
                </div>
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default Services;