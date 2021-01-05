import React from 'react';
import './Rooms.css';

const SingleRoom = ({room}) => {
    return (
        <div className="col-lg-4 col-md-4 col-12 col-sm-12 d-flex justify-content-center">
            <div className="mt-5 pt-5" id="singleCard">
                <div className="card mb-3 text-center" style={{width: '22rem'}}>
                    <figure><img className="card-img-top" src={room.img} alt="Card image cap"/></figure>                    
                    <div className="card-body">
                        <h5>{room.name}</h5>
                        <h6 className="text-secondary">{room.price}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;