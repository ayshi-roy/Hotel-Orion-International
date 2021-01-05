import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logos/logo2.png';
import './Navbar.css';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY > 100){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
        <div>
            <nav  style={{fontSize: '16px'}} className={navbar ? 'navbar navbar-light active fixed-top navbar-expand-lg' : 'navbar navbar-dark fixed-top navbar-expand-lg'}>
                <div className="navbar-brand" href="#">
                    <img src={logo2} style={{height:'45px',marginLeft:'80px'}}/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-4">
                        <li className="nav-item active">
                            <Link to="/home" className={navbar ? 'nav-link mr-3 text-danger' : 'nav-link mr-3 text-white' } style={{textDecoration: "none"}}>
                                HOME
                            </Link>                            
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ROOMS
                            </a>
                            <div className="dropdown-menu" style={{background:'black',width:'300px'}} aria-labelledby="navbarDropdown">
                                <Link to="/list"  className="dropdown-item" style={{textDecoration: "none",background:'black',color:'white'}}>
                                    DELUXE SINGLE
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/list"  className="dropdown-item" style={{textDecoration: "none",background:'black',color:'white'}}>
                                    DELUX TWIN
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/list"  className="dropdown-item" style={{textDecoration: "none",background:'black',color:'white'}}>
                                    ORION SUITE
                                </Link>
                                <div className="dropdown-divider" style={{background:'black'}}></div>
                                <Link to="/list"  className="dropdown-item" style={{textDecoration: "none",background:'black',color:'white'}}>
                                    EXICUTIVE SUITE
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/list"  className="dropdown-item" style={{textDecoration: "none",background:'black',color:'white'}}>
                                    ROYAL SUITE
                                </Link> 
                            </div>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/list"  className="nav-link mr-3 text-secondary" style={{textDecoration: "none"}}>
                                ROOMS
                            </Link>                                                        
                        </li> */}
                        <li className="nav-item">                            
                            <Link to="/allList" className="nav-link mr-3 text-secondary" style={{textDecoration: "none"}}>
                                AMENITIES
                            </Link>                                                           
                        </li>
                        <li className="nav-item">                            
                            <Link to="/about" className="nav-link mr-3 text-secondary" style={{textDecoration: "none"}}>
                                ABOUT
                            </Link>                                                           
                        </li>
                        <li className="nav-item">                            
                            <Link to="/contact" className="nav-link mr-3 text-secondary" style={{textDecoration: "none"}}>
                                CONTACT
                            </Link>                                                           
                        </li>
                        
                    </ul>                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;