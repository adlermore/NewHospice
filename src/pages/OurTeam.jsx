import React, { useEffect, useState, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/OurTeam/_ourTeam.scss';
import { useNavigate } from 'react-router-dom';
import PageLoader from '../components/PageLoader/PageLoader';
import { motion } from "framer-motion";
import request from "../components/Request/request";
// import { Spinner } from 'react-bootstrap';


const OurTeam = () => {

    const isMounted = useRef(true);
    const navigate = useNavigate();
    const [servicesData, setServicestData] = useState(null);
    const [isLoadSuccess, setIsLoadSuccess] = useState(false);
    const [servicePage, setServicePage] = useState(null);

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        let desiredPart = parts.slice(parts.indexOf("team") + 1).join("/");
        const currentId = parseInt(desiredPart.match(/\d+/), 10);
        let element;
        setServicePage(Math.ceil(currentId / 4));
        element = document.getElementById(desiredPart);

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
                servicesLink = `https://hospis.dev.itfabers.com/api/team/1`
                request(servicesLink)
                    .then((services) => {
                        setServicestData(services.data);
                        setTimeout(() => {
                            element = document.getElementById(desiredPart);
                            if (element) {
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

    if (!isLoadSuccess) {
        return <PageLoader />
    }

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
                {servicesData &&
                    servicesData.data.map((team) => (
                        <div key={team.id} className="team_block second_bg" id={`team${team.id}`}>
                            <div className="custom_container">
                                <div className="image_block" style={{ backgroundImage: `url(${team.image})` }}></div>
                                <div className="team_info">
                                    <div className="section_title service_title">
                                        {team.position}
                                    </div>
                                    <div className="section_description">
                                        {team.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default OurTeam;