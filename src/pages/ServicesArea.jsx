import React, { useState, useRef, useEffect } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/ServicesArea/_servicesArea.scss';
import { useForm } from "react-hook-form";
import MapWithMenu from '../components/Map/MapWithMenu';
import geojsonDataFile from './mapGEO.json';
import { motion } from "framer-motion";
import request from '../components/Request/request';


const ContactUs = () => {
    const success = useRef(null);
    const [geojsonData, setGeojsonData] = useState(null);

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
        }, 12000);
        request(`https://hospis.dev.itfabers.com/api/new-request`, 'POST', data)
        .then((success) => {
            console.log(success);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {
        setGeojsonData(geojsonDataFile);
        console.log(geojsonData);
    }, [geojsonData]);


    return (
        <motion.div className="areas_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container bottom_30">
                <div className="section_title center_mode">Service Areas</div>
            </div>
            <MapWithMenu geojsonData={geojsonData} />
            <div className="custom_container page_section">
                <div className="section_title center_mode">Contact Us Today</div>
                <div className="section_description center_mode">
                If you believe our services may be beneficial for you or a loved one, please fill out the form below OR call us at 888.965.9595. Our specialists are ready to assist you!
                </div>
            </div>
            <div className="form_section" style={{ background: `white` }}>
                <div className={dataSend ? `success_message view` : `success_message`} ref={success}>Success ! ✔</div>
                <div className="custom_container">
                    <div className="form_container">
                        <div className="form_inner">
                            <form onSubmit={handleSubmitForm1(onSubmit)}>
                             <div className={errors?.name?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Name</div>
                                    <input placeholder="Name*" className="form-control" name="name" {...register("name", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className={errors?.email?.type === "required" || errors?.email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >
                                    <div className='block_label'>Email*</div>
                                    <input placeholder="Email" className="form-control" name="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    {errors?.email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                        <p className="error-info" >This field is required</p>}
                                </div>
                                <div className={errors?.description?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>How may we assist you?</div>
                                    <input placeholder="How may we assist you?*" className="form-control" name="description" {...register("description", { required: true })} />
                                    <p className="error-info" >This field is required</p>
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
        </motion.div >
    )
}

export default ContactUs;