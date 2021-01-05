import React from 'react';
import {Button, Paper} from '@material-ui/core';
import './Carousel.css';

const Item = ({item}) => {
    const {img} = item;
    return (
        <>
            <Paper>
                <div className="img-carousel" style={{'backgroundImage': `url(${img})`}}>
                    <div className="shadow-part">
                        <div className="img-text text-center" style={{paddingTop:'195px'}}>
                            <h1 style={{color:'white',fontSize:'60px'}}>{item.name}</h1>
                            <h1 style={{color:'white',fontSize:'60px'}}>{item.name2}</h1>
                            <p className="text-white">{item.description}</p>
                        </div>
                    </div>                
                </div>            
            </Paper>
        </>
    );
};

export default Item;