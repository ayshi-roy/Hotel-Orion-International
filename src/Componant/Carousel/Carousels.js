import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img from '../../images/img.jpg';
import img1 from '../../images/img1.jpg';
import img3 from '../../images/img3.jpg';
import Carousel from 'react-material-ui-carousel';

import './Carousel.css';
import Item from './Item';


const Carousels = () => {

    var items = [
        {
            name: "Hotel Orion",
            name2:"International",
            description: "Life style & hotel",
            img: img
        },
        {
            name: "Unique Experience",
            description: "Enjoy with Us",
            img: img3
        },
        {
            name: "Best Deal In Town",
            name2: "4Q Restaurant",
            description: "THAI-CHINES,INDIA AND BANGLADESHI CUISINE",
            img: img1
        }
    ]    

    return (
        <div> 
            <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
        </div>
    );
};

export default Carousels;