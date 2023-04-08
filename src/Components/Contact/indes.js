import React from 'react';
import './index.scss';

import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';



emailjs.init('KoykfC3B1UUSHCa5I');

function Contact() {


    const sendEmail = (subject,name, email, message) => {
        const emailParams = {
            message: message,
            name: name,
            email: email,
            subject:subject
        };

        emailjs.send('service_a7mnpkr', 'template_s2qa69g', emailParams)
            .then(response => {
                console.log(response)
                Swal.fire(
                    'Sent!',
                    'Your message has been sent.',
                    'success'
                  );
            })
            .catch(error => console.error(error));
    };

    // form validation
    const schema = yup.object().shape({
        Name: yup.string().required(),
        Email: yup.string().email('Invalid email address').max(50, 'Email must be max 50 characters').required(),
        Subject: yup.string().required(),
        Message: yup.string().required(),

    });

    // form handling
    const { register, handleSubmit, formState: { errors },setValue } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        sendEmail(data.Subject, data.Name, data.Email,data.Message);
        setValue("Name","");
        setValue("Email","");
        setValue("Subject","");
        setValue("Message","");
    };

    return (
        <div className='contactMeSection p-sm-5 p-3'>
            <div className="row g-0">
                <div className="col-md-6">
                    <h1 className='text-light text-center mt-4'>Contact Me</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='d-block d-sm-flex justify-content-evenly'>
                            <div className='borderedInput'>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Name'
                                    className='borderedInput-input'
                                    {...register("Name")}
                                />
                                {errors.Name && <span className=' small errorMessage'>{errors.Name.message}</span>}
                                <img src={require("../../Assets/Images/scifiBorder.png")} alt="" className='borderedInput-border' />
                            </div>
                            <div className='borderedInput'>
                                <input
                                    autoComplete="off"
                                    placeholder='Email'
                                    className='borderedInput-input'
                                    {...register("Email")}
                                />
                                {errors.Email && <span className=' small errorMessage'>{errors.Email.message}</span>}
                                <img src={require("../../Assets/Images/scifiBorder.png")} alt="" className='borderedInput-border' />
                            </div>
                        </div>

                        <div className='borderedInput'>
                            <input
                                placeholder='Subject'
                                className='borderedInput-input'
                                autoComplete="off"

                                {...register("Subject")}
                            />
                            {errors.Subject && <span className=' small errorMessage'>{errors.Subject.message}</span>}

                            <img src={require("../../Assets/Images/scifiBorder.png")} alt="" className='borderedInput-border' />
                        </div>
                        <div>
                            <div className='borderedInput mt-5'>
                                <textarea
                                    autoComplete="off"
                                    cols="50" rows="10"
                                    className='borderedInput-textarea'
                                    placeholder='Your Message'
                                    {...register("Message")}

                                ></textarea>
                                {errors.Message && <span className=' small errorMessage inTextarea'>{errors.Message.message}</span>}

                                <img src={require("../../Assets/Images/scifiBorder.png")} alt="" className='borderedInput-border inTextarea' />
                            </div>
                        </div>
                        <div className='mt-5 bg-transparent d-flex justify-content-end'>
                            <button type='submit' className='submit-btn mt-3'>Send Message</button>

                        </div>
                    </form>
                </div>
                <div className="col-md-6 contactMeSection-image d-flex justify-content-center">
                    <img src={require("../../Assets/Images/hand-shake.jpg")} alt="" className='w-100' />
                </div>
            </div>
        </div>
    );
}

export default Contact;