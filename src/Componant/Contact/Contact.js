import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import Slider from './Slider';
import logo from '../../images/logos/logo.jpg';

const Contact = () => {
    return (
        <div className="contact">
            <Navbar></Navbar>
            <Slider></Slider>
            <div className="main-contact mt-5 pt-5 mb-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 mb-5">
                            <div className="contact-form mt-4">
                                <form>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control form-control-lg" placeholder="Full Name"/>                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control form-control-lg"  placeholder="Enter Address"/>                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="number" className="form-control form-control-lg"  placeholder="Phone #"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" placeholder="Say hello to us" rows="5"></textarea>
                                    </div>                                    
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                            <div className="contact-information">
                                <div className="d-flex justify-content-center">
                                    <img style={{ height: '50px'}} src={logo}/>
                                    <h1 className="ml-2">Contact Info</h1> 
                                </div>    
                                <div className="contact-number mt-3">
                                        <p className="p-bold">Address</p>
                                        <p>Rail Road</p>
                                        <p>Jashore, Bangladesh</p>
                                        <br/>                                        
                                        <p className="p-bold">Phone</p>
                                        <p>Hotline 1 : +8801981333444</p>
                                        <br/>
                                        <p>Hotline 2 : +8801404028002</p> 
                                        <br/>
                                        <p>Hotline 3 : +8801404028003</p> 
                                        <br/>
                                        <p>Tele 1 :+880 421 65226</p> 
                                        <br/>
                                        <p>Tele 2 :+880 421 65334</p>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;