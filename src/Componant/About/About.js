import React from 'react';
import '../Contact/Contact.css';
import logo from '../../images/logos/logo.jpg';
import Navbar from '../Navbar/Navbar';
import img2 from '../../images/img_2.jpg';
import Features from '../Features/RoomFeature';
import HotelFeature from '../HotelFeature/HotelFeature';
import PhotoGalary from '../PhotoGalary/PhotoGalary';

const About = () => {
    return (
        <div className="contact">
            <Navbar></Navbar>
            <div className="slider-about-part">
                <div className="slider-shadow">
                    <div className="slider-text">
                        <div className="text-center">
                            <h1 className="text-white">
                                About Us
                            </h1>                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12 col-sm-12 main-contact mt-5 pt-5 mb-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 mb-5 pb-5">
                            <div className="about-image mt-4 d-flex justify-content-center">
                                <div className="image-video">
                                    <div class="video">  
                                        <img style={{height:'350px'}} src={img2}/>
                                        <div className="video-img"></div>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 mt-5">
                            <div className="d-flex justify-content-center">
                                <div className="contact-information">
                                    <div className="d-flex justify-content-center">
                                        <img style={{ height: '50px'}} src={logo}/>
                                        <h1 className="ml-2">About Us</h1> 
                                    </div>    
                                    <div className="contact-number mt-3">
                                        <p className="text-secondary">At <span className="about-text">‘Hotel Orion International’</span>, we know what it means to come from a long and tiring trip and to long for a genuine welcome, a good drink and a comfortable bed to stretch out on. If you enjoy being made a fuss of, you’ve come to the right place! We have a total of<span className="about-text"> 121 </span>room and suites to make your stay enjoyable.</p>
                                        <p className="text-secondary">Families and business people love us, too. We’ve been hosts to many college graduations, family re-unions, birthday celebrations, wedding celebrations, meetings and training programs in <span className="about-text">3</span> of our gorgeous ‘hall rooms’ and 2 full featured meeting rooms.</p>
                                        <p className="text-secondary">At lobby we have <span className="about-text">1</span> coffee shop, <span className="about-text">1</span> specious restaurant where we serve Thai, Chinese and Bagnoli cuisine. We have a separate B-B-Q station, a <span className="about-text">Supershop, swimming pool and gym</span>. Our parking facility can accommodate <span className="about-text">100+</span> cars with valet service.</p> 
                                        <p className="text-secondary">Right around the corner from City center, minutes away from Railway station and the bus terminal. You won't find a better value than this true 3-star Hotel. Come on in. We’re here to make you feel good!</p>                                  
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Features></Features>
            <HotelFeature></HotelFeature>
            <PhotoGalary></PhotoGalary>
        </div>
    );
};

export default About;