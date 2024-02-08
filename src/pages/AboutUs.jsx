import React, { useState, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/AboutUs/_aboutUs.scss';
import AboutCover from '../assets/img/aboutCover.png';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

const AboutUs = () => {

    const success = useRef(null);
    const [dataSend, setDataSend] = useState(false);

    const { register, handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    const onSubmit = (data) => {
        setDataSend(true);
        success.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            setDataSend(false);
            console.log(data);
        }, 4000);
    };

    return (
        <div className="about_wrapper">
            <div className="custom_container">
                <div className="section_title center_mode">What is hospice</div>
            </div>
            <div className="cover_Image" style={{ backgroundImage: `url(${AboutCover})` }} />
            <div className="accordion_container">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is Hospice?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Who Can Receive Hospice Care?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Who Is Involved in The Hospice Process?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Hospice?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Who Can Receive Hospice Care?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </div>
            <div className="form_section">
                <div className={dataSend ? `success_message view` : `success_message`} ref={success}>Success ! ✔</div>
                <div className="custom_container">
                    <div className="form_container">
                        <div className="form_inner_title">
                            If you have any question
                        </div>
                        <div className="bottom_description">
                            You can ask anything you want to know about hospice
                        </div>
                        <div className="form_inner">
                            <form onSubmit={handleSubmitForm1(onSubmit)}>
                                <div className={errors?.question?.type === "required" ? "form-block  has-error" : "form-block"}  >

                                    <input placeholder="Enter here*" className="form-control" name="question" {...register("question", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className="bttom_inline">
                                    <div className={errors?.user_email?.type === "required" || errors?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >

                                        <input placeholder="Write your Email for getting back to you " className="form-control" name="user_email" {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
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
        </div>
    )
}

export default AboutUs;