
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LuGlobe } from "react-icons/lu";
import brochurePdf from "../../assets/pdf/brochure.pdf";
import presentationPdf from "../../assets/pdf/presentation.pdf";

import request from "../Request/request";

const Footer = () => {
    const isMounted = useRef(true);
    const [servicesData, setServicestDarta] = useState(null);
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        if (isMounted.current) {
            request(`https://hospis.dev.itfabers.com/api/navbar-services`)
                .then((services) => {
                    setServicestDarta(services.data);
                })
                .catch(error => {
                    console.log(error);
                })

            request(`https://hospis.dev.itfabers.com/api/settings`)
                .then((settings) => {
                    setSettings(settings.data[0]);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        return () => {
            isMounted.current = false;
        };
    }, [servicesData, settings]);

    return (
        <footer className="page_footer">
            <div className="custom_container">
                <div className="footer_inner">
                    <div className="footer_logo">
                        <Link to="/"><img src={settings && settings.logo} alt="footerLogo" /></Link>
                    </div>
                    <ul className="footer_menu">
                        <li className='services_li'>
                            <span className="menu_title">Services</span>
                            {servicesData && servicesData.map((service, index) => (
                                <Link key={index}  to={`services/service${service.id}`} className="menu_link">{service.title}</Link>
                            ))}
                        </li>
                        <li>
                            <span className="menu_title">Information</span>
                            <a target='blank' href={brochurePdf} className="menu_link">Brochure</a>
                            <a target='blank' href={presentationPdf} className="menu_link">Presentation</a>
                            <Link to="physicians/" className="menu_link">Physicians Referral</Link>
                        </li>
                        <li>
                            <span className="menu_title">Contacts</span>
                            <a href={`tel:+1${settings && settings.phone}`} className="menu_link icon-phone">+1{settings && settings.phone}</a>
                            <a href={`mailto:${settings && settings.email}`} className="menu_link "><LuGlobe />{settings && settings.email}</a>
                            <a target='blank' href="https://www.google.com/maps/place/12444+Victory+Blvd+%23408,+North+Hollywood,+CA+91606,+%D0%A1%D0%A8%D0%90/@34.186439,-118.404412,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2967caa5b85c5:0x93f08d41dd656aac!8m2!3d34.186439!4d-118.404412!16s%2Fg%2F11v0j_7_xm?entry=ttu" className="menu_link icon-location">{settings && settings.location}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_secial">
                <div className="custom_cintainer">
                    <div className="social_list">
                        <a target='blank' href="https://www.facebook.com/newhopehospicecare?mibextid=9R9pXO" className="icon-fb"> </a>
                        <a target='blank' href="https://www.instagram.com/newhopehospicecare/?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" className="icon-insta"> </a>
                        <a target='blank' href="https://www.linkedin.com/in/arturkaragyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="icon-linkedin"> </a>
                    </div>
                </div>
            </div>
            <div className="footer_copytoght">
                <div className="custom_container">
                    <div className="coputoght_inner">
                        Copyright 2024 / Website by <a target="blank" href="https://lightdesignstudio.am/">Light Design Studio</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;














