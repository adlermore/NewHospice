import React, { useState, useRef } from 'react';
import SupportChat from '../components/SupportChat/SupportChat';
import '../assets/scss/Physicians/_physicians.scss';
import serviveInner1 from '../assets/img/joinTeam.png';
import referralImg from '../assets/img/referal.png';
import { useForm, Controller } from "react-hook-form";

const Physicians = () => {

    const success = useRef(null);
    const [dataSend, setDataSend] = useState(false);

    const { register, control, handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    const onSubmit = (data) => {
        setDataSend(true);
        success.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            setDataSend(false);
        }, 4000);
    };

    return (
        <div className="physicians_wrapper">
            <div className="custom_container">
                <div className="section_title center_mode">Physicians Referral</div>
            </div>
            <div className="cover_Image" style={{ backgroundImage: `url(${referralImg})` }}>
                <div className="custom_container">
                    <div className="cover_title">
                        Improving Patients’ Quality
                        of Life With Our Hospice
                        Care Team
                    </div>
                </div>
            </div>
            <div className="custom_container">
                <div className="section_description referal_desc center_mode">
                    At New Hope Hospice Care, we are renowned for our exceptional and empathetic approach to end-of-life care,
                    earning us widespread recommendations from physicians, nursing homes, and hospitals
                    alike. Our ACHC accreditation underscores our commitment to delivering superior
                    hospice services, with a focus on significantly enhancing the quality of life for
                    our patients.
                    <br />
                    <br />
                    We invite healthcare professionals across Southern California to consider New
                    Hope Hospice Care for patients who would benefit from our holistic and
                    patient-centered approach. For referrals, please utilize the form provided
                    below. Trust in us to extend the same level of care and compassion to your
                    patients that you have always provided.
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
        </div>
    )
}

export default Physicians;