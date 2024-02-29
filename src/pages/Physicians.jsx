import React, { useState, useEffect, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Physicians/_physicians.scss';
import serviveInner1 from '../assets/img/joinTeam.png';
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import request from '../components/Request/request';
import PageLoader from '../components/PageLoader/PageLoader';

const Physicians = () => {

    const success = useRef(null);
    const [dataSend, setDataSend] = useState(false);
    const isMounted = useRef(true);
    const [referalData, setReferalData] = useState({})
    const [isLoadSuccess, setLoadSuccess] = useState(false);

    const { register, control, handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });


    useEffect(() => {
        if (isMounted.current) {
            request(`https://hospis.dev.itfabers.com/api/page/referral`)
                .then((referalData) => {
                    setReferalData(referalData.data.page_content);
                    setTimeout(() => {
                        setLoadSuccess(true)
                    }, 500);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        console.log(referalData);

        return () => {
            isMounted.current = false;
        };
    }, [referalData])



    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('user_email', data.user_email);
            formData.append('user_name', data.user_name);
            formData.append('user_surname', data.user_surname);
            formData.append('user_position', data.user_position);
            formData.append('user_description', data.user_description);
            formData.append('pdfFile', data.pdfFile);

            const response = await fetch('https://hospis.dev.itfabers.com/api/new-referral', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setDataSend(true);
                success.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    setDataSend(false);
                }, 12000);
            } else {
                console.error('Error submitting form:', response.statusText);
            }

        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    if (!isLoadSuccess) {
        return <PageLoader />
    }
    return (
        <motion.div className="physicians_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="custom_container">
                <div className="section_title center_mode">Physicians Referral</div>
            </div>
            <div className="cover_Image" style={{ backgroundImage: `url(${referalData.Banner.BackgroundImage})` }}>
                <div className="custom_container">
                    <div className="cover_title">
                    {referalData.Banner.Title}
                    </div>
                </div>
            </div>
            <div className="custom_container">
                <div className="section_description referal_desc center_mode">
                  {referalData.Description}
                </div>
            </div>
            <div className="form_section" style={{ background: `url(${serviveInner1})` }}>
                <div className={dataSend ? `success_message view` : `success_message`} ref={success}>Success ! ✔</div>
                <div className="custom_container">
                    <div className="form_container">
                        <div className="form_inner">
                            <form onSubmit={handleSubmitForm1(onSubmit)}>
                                <div className={errors?.user_email?.type === "required" || errors?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >
                                    <div className='block_label'>Referring Persons Email*</div>
                                    <input placeholder="Email" className="form-control" name="user_email" {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    {errors?.user_email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                        <p className="error-info" >This field is required</p>}
                                </div>
                                <div className={errors?.user_name?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Patient Name</div>
                                    <input placeholder="Name*" className="form-control" name="user_name" {...register("user_name", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className={errors?.user_surname?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Patient Last name</div>
                                    <input placeholder="Surname*" className="form-control" name="user_surname" {...register("user_surname", { required: true })} />
                                    <p className="error-info" >This field is required</p>
                                </div>
                                <div className={errors?.user_position?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                    <div className='block_label'>Necessary Information</div>
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
                                                rules={{ required: 'Attach Referral' }}
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

export default Physicians;