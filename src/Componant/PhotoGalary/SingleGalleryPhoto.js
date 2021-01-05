import React, { useState } from 'react';
import './PhotoGalary.css';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import img1 from '../../images/lightBox/img_1.jpg';
import img2 from '../../images/lightBox/img_2.jpg';
import img3 from '../../images/lightBox/img_3.jpg';
import img4 from '../../images/lightBox/img_4.jpg';


const images = [
    {
        url: img1,
        title:"image title 1"
    },
    {
        url: img2,
        title:"image title 2"
    },
    {
        url: img3,
        title:"image title 3"
    },
    {
        url: img4,
        title:"image title 4"
    }
    
  ];

const SingleGalleryPhoto = ({image}) => {
    const [imaged, setImaged] = useState(false);
      
    return (
        
        <div className="col-lg-3 col-md-3 col-12 col-sm-12 gallery-body">
            <div className="d-flex justify-content-center">
                <img className="img-gallery" onClick={() => setImaged(true)} src={image.img}/>
                { imaged && <Lightbox images={images} onClose={() => setImaged(false)}></Lightbox>}  
            </div>
        </div>
    );
};

export default SingleGalleryPhoto;