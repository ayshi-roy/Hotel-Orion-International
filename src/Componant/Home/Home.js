import React from 'react';
import Carousel from '../Carousel/Carousels';
import Features from '../Features/RoomFeature';
import HotelFeature from '../HotelFeature/HotelFeature';
import Navbar from '../Navbar/Navbar';
import PhotoGalary from '../PhotoGalary/PhotoGalary';
import Rooms from '../Rooms/Rooms';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Rooms></Rooms>
            <Features></Features>
            <HotelFeature></HotelFeature>
            <PhotoGalary></PhotoGalary>            
        </div>
    );
};

export default Home;