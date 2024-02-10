import React, { useState, useRef , useEffect} from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/ServicesArea/_servicesArea.scss';
import { useForm } from "react-hook-form";
import MapWithMenu from '../components/Map/MapWithMenu';
import geojsonDataFile from './mapGEO.json';


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
        }, 4000);
    };

    useEffect(() => {
        setGeojsonData(geojsonDataFile);
        console.log(geojsonData);
    }, [geojsonData]);
    

    return (
        <div className="areas_wrapper">
            <div className="custom_container">
                <div className="section_title center_mode">Contact us</div>
            </div>
            <MapWithMenu geojsonData={geojsonData} />
            <div className="form_section" style={{ background: `white` }}>
                <div className={dataSend ? `success_message view` : `success_message`} ref={success}>Success ! ✔</div>
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
                                <div className={errors?.user_position?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Position</div>
                                    <input placeholder="Position*" className="form-control" name="user_position" {...register("user_position", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className={errors?.user_description?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Description</div>
                                    <input placeholder="Description*" className="form-control" name="user_description" {...register("user_description", { required: true })} />
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
        </div>
    )
}

export default ContactUs;