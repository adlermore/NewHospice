
import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/img/footerLogo.png';
import { LuGlobe } from "react-icons/lu";
import brochurePdf from "../../assets/pdf/brochure.pdf"

const Footer = () => {
    return (
        <footer className="page_footer">
            <div className="custom_container">
                <div className="footer_inner">
                    <div className="footer_logo">
                        <Link to="/"><img src={footerLogo} alt="footerLogo" /></Link>
                    </div>
                    <ul className="footer_menu">
                        <li>
                            <span className="menu_title">Services</span>
                            <a href="/#" className="menu_link">Skilled nursing care</a>
                            <a href="/#" className="menu_link">Medication delivery</a>
                            <a href="/#" className="menu_link">Emotional & spiritual support</a>
                            <a href="/#" className="menu_link">Medical supplies & equipment</a>
                            <a href="/#" className="menu_link">Pain & symptom management </a>
                            <a href="/#" className="menu_link">Continuous care & respite care</a>
                        </li>
                        <li>
                            <span className="menu_title">Wound care</span>
                            <a href="/#" className="menu_link">Scheduled visits</a>
                            <a href="/#" className="menu_link">Podiatry services</a>
                            <a href="/#" className="menu_link">Personal care aides</a>
                            <a href="/#" className="menu_link">Counseling services</a>
                            <a href="/#" className="menu_link">Bereavement services</a>
                        </li>
                        <li>
                            <span className="menu_title">Information</span>
                            <a href="/#" className="menu_link">Brochure</a>
                            {/* <a href="/#" className="menu_link">Our terms</a> */}
                            <a target='blank' href={brochurePdf} className="menu_link">Presentation</a>
                            <Link to="physicians/" className="menu_link">Physicians Referral</Link>
                        </li>
                        <li>
                            <span className="menu_title">Contacts</span>
                            <a href="tel:+18889659595" className="menu_link icon-phone">+1 888-965-9595</a>
                            <a href="mailto:info@nhhospicecare.com" className="menu_link "><LuGlobe /> info@nhhospicecare.com</a>
                            <a target='blank' href="https://www.google.com/maps/place/12444+Victory+Blvd+%23408,+North+Hollywood,+CA+91606,+%D0%A1%D0%A8%D0%90/@34.186439,-118.404412,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2967caa5b85c5:0x93f08d41dd656aac!8m2!3d34.186439!4d-118.404412!16s%2Fg%2F11v0j_7_xm?entry=ttu" className="menu_link icon-location">12444 Victory Blvd #408,North Hollywood CA 91606 </a>
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














