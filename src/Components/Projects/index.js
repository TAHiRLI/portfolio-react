import React from 'react';
import './projects.scss';
import { Modal } from 'react-bootstrap';
import Slider from "react-slick";


function Projects() {

    const [isShow, invokeModal] = React.useState(false);
    const [currentProj, setCurrentProj] = React.useState({});
    const projects = [
        {
            id: 1,
            name: "Fiorello",
            posterPhoto: "Fiorello/fiorello.png",
            photos: ["Fiorello/fiorello.png", "Fiorello/fiorello-login.png", "Fiorello/fiorello-home.png"],
            desc: "",
            link: "https://github.com/TAHiRLI/FrontEnd_Project.git"
        },
        {
            id: 0,
            name: "Quarter",
            posterPhoto: "Quarter/quarter1.png",
            photos: ["Quarter/quarter-shop.png", "Quarter/quarter-home.png", "Quarter/quarter-profile.png", "Quarter/quarter1.png"],
            desc: "Quarter is an e-commerce like web application where properities are sold and users can send request and comment for a property. My main aim was to test my backend skills for the first time after Pustok application.",
            link: "https://github.com/TAHiRLI/Backend-Project.git"
        },
      
        {
            id: 2,
            name: "Medlab",
            posterPhoto: "Medlab/medlab.png",
            photos: ["Medlab/medlab-home.png", "Medlab/medlab-doctor.png", "Medlab/medlab-profile.png", "Medlab/medlab-login.png", "Medlab/medlab.png"],
            desc: "Medlab is a hospital management web site with different features. This project aims to solve many problems that hospitals face and additionally, It helps people to connect with the doctor and communicate without the need of going to the hospital. Additionally, there is an e-commerce feature in the website which can be used as online pharmacy.",
            link: "https://github.com/TAHiRLI/FinalProject.git"
        },
        
    ];
    const initModal = (i) => {
        console.log(i);
        if (i !== null)
            setCurrentProj(projects[i]);
        return invokeModal(true);
    };


    // slider settings
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        slidesToShow: 1,
        arrows: false,
        focusOnSelect: true,
        vertical: false,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

 
    return (
        <div>
            <div className=" p-sm-5 p-3 py-5 ">
                <h1 className='text-light text-center '>My Projects</h1>
                <div className="projects-container ">
                        {projects.reverse().map((proj, i) => (
                            <div onClick={() => { initModal(i); }} className="screen-container" key={i}>
                                <div className="screen">
                                    <div className="screen-overlay"></div>
                                    <div className="screen-projName">
                                        {proj.name}
                                    </div>
                                    <div className="screen-image"
                                      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Projects/${proj.posterPhoto})` }}
                                    ></div>
                                    <div className="screen-hover">
                                        <img src={require("../../Assets/Images/cube.png")} alt="" className='cube' />
                                        <div className="screen-hover_title">
                                            <span>{proj.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

            </div>


            <Modal dialogClassName='modal-xl' contentClassName='bg-blue text-light' show={isShow}>
                <Modal.Header closeButton onClick={() => { invokeModal(false); }}>
                    <Modal.Title className='text-center fs-2 w-100 fw-bold'>{currentProj.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Slider {...settings} className="slider-container ">

                        {currentProj.photos?.map((photo,i) => (
                            <div key={i}>
                                <img src={`${process.env.PUBLIC_URL}/Images/Projects/${photo}`}  alt="" />
                            </div>
                        ))}



                    </Slider>

                    <div className="project-about my-4">
                        {currentProj.desc}
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <a href={`${currentProj.link}`} target='_blank' rel='noreferrer' className='text-decoration-none text-dark fw-bold btn bg-dark-yellow ' >
                        Checkout More
                    </a>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Projects;