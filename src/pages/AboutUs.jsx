import React, { useState, useEffect, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/AboutUs/_aboutUs.scss';
import AboutCover from '../assets/img/aboutCover.png';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { motion } from "framer-motion";
import request from '../components/Request/request';

const AboutUs = () => {

    const success = useRef(null);
    const [dataSend, setDataSend] = useState(false);
    const [aboutData, setAboutDarta] = useState({});
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted.current) {
            request(`https://hospis.dev.itfabers.com/api/page/about`)
                .then((about) => {
                    setAboutDarta(about.data.page_content);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        return () => {
            isMounted.current = false;
        };

    }, [aboutData])


    const { register, handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    const onSubmit = (data) => {
        setDataSend(true);
        success.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            setDataSend(false);
            console.log(data);
        }, 12000);
        request(`https://hospis.dev.itfabers.com/api/subscribe`, 'POST', data)
        .then((success) => {
            console.log(success);
        })
        .catch(error => {
            console.log(error);
        })
    };

    return (
        <motion.div className="about_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                <div className="section_title center_mode">Frequently Asked Questions</div>
            </div>
            <div className="cover_Image" style={{ backgroundImage: `url(${AboutCover})` }} />
            <div className="accordion_container">
                <Accordion>
                    {aboutData.Info && aboutData.Info.map((acordionData , index) =>(
                        <Accordion.Item key={index} eventKey={index}>
                           <Accordion.Header>{acordionData.Title}</Accordion.Header>
                           <Accordion.Body>
                               {acordionData.Description}
                           </Accordion.Body>
                       </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            <div className="form_section">
                <div className={dataSend ? `success_message view` : `success_message`} ref={success}>Success ! ✔</div>
                <div className="custom_container">
                    <div className="form_container">
                        <div className="form_inner_title">
                        Contact Us
                        </div>
                        <div className="form_inner">
                            <form onSubmit={handleSubmitForm1(onSubmit)}>
                                <div className={errors?.question?.type === "required" ? "form-block  has-error" : "form-block"}  >

                                    <input placeholder="Enter question, concern, or inquiry here*" className="form-control" name="question" {...register("question", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className="bttom_inline">
                                    <div className={errors?.user_email?.type === "required" || errors?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >

                                        <input placeholder="Provide the best email for a response*" className="form-control" name="user_email" {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                                        {errors?.user_email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                            <p className="error-info" >This field is required</p>}
                                    </div>
                                    <button type='submit' className="bttom_inline site_btn bttom_inline" disabled={dataSend}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <SupportChat />
        </motion.div>
    )
}

export default AboutUs;