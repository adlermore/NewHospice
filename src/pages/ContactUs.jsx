import React, { useState, useEffect, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/ContactUs/_contactUs.scss';
import serviveInner1 from '../assets/img/contactsCover.png';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import request from '../components/Request/request';
import Placeholder from 'react-bootstrap/Placeholder';

const ContactUs = () => {
    
    const success = useRef(null);
    const isMounted = useRef(true);
    const [contactData, setContactData] = useState({})
    const [dataSend, setDataSend] = useState(false);
    const { register, handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('user_email', data.user_email);
            formData.append('user_name', data.user_name);
            formData.append('user_surname', data.user_surname);
            formData.append('user_description', data.user_description);
            // formData.append('pdfFile', data.pdfFile);
    
            const response = await fetch('https://hospis.dev.itfabers.com/api/new-contact', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                console.log('Form submitted successfully');
                setDataSend(true);
                // success.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                window.scrollTo(0, document.getElementById('success').offsetTop - 200);
                setTimeout(() => {
                    setDataSend(false);
                }, 8000);
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    useEffect(() => {
        const messageINput = document.getElementById('messageInput');
        if (messageINput) {
            messageINput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            messageINput.focus();
        }
        if (isMounted.current) {
            request(`https://hospis.dev.itfabers.com/api/page/contact-us`)
                .then((joinUsData) => {
                    setContactData(joinUsData.data.page_content);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        return () => {
            isMounted.current = false;
        };

    }, [contactData])


    return (
        <motion.div className="contact_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
            {contactData.Title ?
                    <>
                        <div className="section_title center_mode">{contactData.Title}</div>
                        <div className="section_description center_mode">
                            {contactData.Description}
                        </div>
                    </>
                    :
                    <>
                        <Placeholder className="text-center" as="p" animation="glow">
                            <Placeholder xs={4} />
                            <br/>
                            <br/>
                            <Placeholder xs={2} />{' '}
                            <Placeholder xs={4} />{' '}
                            <Placeholder xs={5} />{' '}
                            <Placeholder xs={4} />{' '} 
                            <Placeholder xs={4} />{' '}
                            <Placeholder xs={3} />{' '}
                            <Placeholder xs={2} />{' '}
                            <Placeholder xs={4} />{' '}
                            <Placeholder xs={5} />{' '}
                        </Placeholder>
                    </>
                }
            </div>
            <div className="form_section" style={{ background: `url(${serviveInner1})` }}  ref={success}>
                <div className={dataSend ? `success_message view` : `success_message`}  id="success">Success ! ✔</div>
                <div className="custom_container">
                    <div className="form_container">
                        <div className="form_inner">
                            <form onSubmit={handleSubmitForm1(onSubmit)}>
                                <div className={errors?.user_email?.type === "required" || errors?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >
                                    <div className='block_label'>Email*</div>
                                    <input placeholder="Email" className="form-control" name="user_email" {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    {errors?.user_email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                        <p className="error-info" >This field is required</p>}
                                </div>
                                <div className={errors?.user_name?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Name</div>
                                    <input placeholder="Name*" className="form-control" name="user_name" {...register("user_name", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className={errors?.user_surname?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Surname</div>
                                    <input placeholder="Surname*" className="form-control" name="user_surname" {...register("user_surname", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className={errors?.user_description?.type === "required" ? "form-block  has-error" : "form-block"} >
                                    <div className='block_label'>Description</div>
                                    <input placeholder="Description*" className="form-control"  id="messageInput" name="user_description" {...register("user_description", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className="bottom_description">
                                    Enter your request details. A member of our support team will respond to you as soon as possible.
                                </div>
                                <div className="bttom_inline">
                                    <button type='submit' className="site_btn sign-btn" disabled={dataSend}>Send</button>
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

export default ContactUs;