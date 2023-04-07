import React from 'react';
import './index.scss';
function Contact() {
    return (
        <div className='contactMeSection p-sm-5 p-3'>
            <div className="row g-0">
                <div className="col-md-6">
                    <h1 className='text-light text-center mt-4'>Contact Me</h1>
                    <form action="">

                        <div className='d-block d-sm-flex justify-content-evenly'>
                            <div className='borderedInput'>
                                <input type="text" name="" id="" placeholder='Name' className='borderedInput-input' />
                                <img src={require("../../Assets/Images/scifiBorder.png")} alt="" className='borderedInput-border' />
                            </div>
                            <div className='borderedInput'>
                                <input type="Email" name="" id="" placeholder='Email' className='borderedInput-input' />
                                <img src={require("../../Assets/Images/scifiBorder.png")} alt="" className='borderedInput-border' />
                            </div>
                        </div>

                        <div className='borderedInput'>
                            <input type="text" name="" id="" placeholder='Subject' className='borderedInput-input' />
                            <img src={require("../../Assets/Images/scifiBorder.png")} alt="" className='borderedInput-border' />
                        </div>
                        <div>
                            <div className='borderedInput mt-5'>
                                <textarea name="" id="" cols="50" rows="10" className='borderedInput-textarea' placeholder='Your Message'></textarea>
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