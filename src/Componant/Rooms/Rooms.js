import React from 'react';
import img1 from '../../images/Rooms_image/img1.jpg';
import img2 from '../../images/Rooms_image/img2.jpg';
import img3 from '../../images/Rooms_image/img3.jpg';
import img4 from '../../images/Rooms_image/img4.jpg';
import img5 from '../../images/Rooms_image/img5.jpg';
import './Rooms.css';
import SingleRoom from './SingleRoom';
import logo from '../../images/logos/logo.jpg';

const rooms = [
    {
        img: img1,
        name: "DELUXE SINGLE",
        price: "BDT. 3500.00 / per night ",
    },
    {
        img: img2,
        name: "DELUXE TWIN",
        price: "BDT. 4500.00 / per night ",
    },
    {
        img: img3,
        name: "ORION SUITE",
        price: "BDT. 5500.00 / per night",
    },
    {
        img: img4,
        name: "EXECUTIVE SUITE",
        price: "BDT. 7000.00 / per night",
    },
    {
        img: img5,
        name: "ROYAL SUITE",
        price: "BDT. 9000.00 / per night",
    }
]
const Rooms = () => {
    return (
        <div className="room">
            <div className="room-header mt-5 pt-5">
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <img style={{ height: '50px'}} src={logo}/>
                    <h3 className="ml-3">OURS ROOMS</h3>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                       rooms.map(room => <SingleRoom room={room}></SingleRoom>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;