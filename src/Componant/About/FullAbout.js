import React from 'react';
import Features from '../Features/RoomFeature';
import HotelFeature from '../HotelFeature/HotelFeature';
import PhotoGalary from '../PhotoGalary/PhotoGalary';
import Navbar from '../Navbar/Navbar';
import About from './About';

const FullAbout = () => {
    return (
        <div style={{overflowX: 'hidden'}}>
            <Navbar></Navbar>
            <About></About>
            <Features></Features>
            <HotelFeature></HotelFeature>
            <PhotoGalary></PhotoGalary>
        </div>
    );
};

export default FullAbout;