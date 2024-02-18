import React, { useState, useEffect, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/JoinUs/_joinUs.scss';
import serviveInner1 from '../assets/img/joinTeam.png';
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import request from '../components/Request/request';
import Placeholder from 'react-bootstrap/Placeholder';

const JoinUs = () => {
    const success = useRef(null);
    const isMounted = useRef(true);
    const [joinData, setJoinData] = useState({})
    const [dataSend, setDataSend] = useState(false);

    const { register, control, handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    const onSubmit = async (data) => {
        try {
            // Create FormData object to handle file uploads
            const formData = new FormData();
            formData.append('user_email', data.user_email);
            formData.append('user_name', data.user_name);
            formData.append('user_surname', data.user_surname);
            formData.append('user_position', data.user_position);
            formData.append('user_description', data.user_description);
            formData.append('pdfFile', data.pdfFile);
    
            // Send POST request using fetch
            const response = await fetch('https://hospis.dev.itfabers.com/api/new-member', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                // Handle success, e.g., show success message
                console.log('Form submitted successfully');
                setDataSend(true);
                success.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    setDataSend(false);
                }, 8000);
            } else {
                // Handle error, e.g., show error message
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    

    useEffect(() => {
        if (isMounted.current) {
            request(`https://hospis.dev.itfabers.com/api/page/join-our-team`)
                .then((joinUsData) => {
                    setJoinData(joinUsData.data.page_content);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        return () => {
            isMounted.current = false;
        };

    }, [joinData])

    return (
        <motion.div className="join_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                {joinData.Title ?
                    <>
                        <div className="section_title center_mode">{joinData.Title}</div>
                        <div className="section_description center_mode">
                            {joinData.Description}
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
            <div className="form_section" style={{ background: `url(${serviveInner1})` }}>
                <div className={dataSend ? `success_message view` : `success_message`} ref={success}>Success ! ✔</div>
                <div className="custom_container">
                    <div className="form_container">
                        <div className="form_inner">
                            <form onSubmit={handleSubmitForm1(onSubmit)} encType="multipart/form-data">
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
                                    <input placeholder="Description*" className="form-control" name="user_description" {...register("user_description", { required: false })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className="bottom_description">
                                    Enter your request details. A member of our support team will respond to you as soon as possible.
                                </div>
                                <div className="bttom_inline">
                                    <div className="attach_block">
                                        <div className={errors?.pdfFile?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                            <div className='block_icon icon-attach' />
                                            <Controller
                                                name="pdfFile"
                                                control={control}
                                                rules={{ required: 'Please Upload Your Cv' }}
                                                render={({ field }) => (
                                                    <input
                                                        style={{
                                                            background: 'transparent'
                                                        }}
                                                        type="file"
                                                        accept=".pdf"
                                                        onChange={(e) => field.onChange(e.target.files[0])}
                                                    />
                                                )}
                                            />
                                            <p className="error-info" >This field is required</p>
                                        </div>
                                    </div>
                                    <button type='submit' className="site_btn sign-btn" disabled={dataSend}>Send</button>
                                </div>
                                <div className="bottom_description max_size">
                                    Max file size: 25.5 MB
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

export default JoinUs;