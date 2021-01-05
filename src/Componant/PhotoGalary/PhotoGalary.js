import React from 'react';
import logo from '../../images/logos/logo.jpg';
import gal_1 from '../../images/photo_gallary/gal_1.jpg';
import gal_2 from '../../images/photo_gallary/gal_2.jpg';
import gal_3 from '../../images/photo_gallary/gal_3.jpg';
import gal_4 from '../../images/photo_gallary/gal_4.jpg';
import gal_5 from '../../images/photo_gallary/gal_5.jpg';
import gal_6 from '../../images/photo_gallary/gal_6.jpg';
import gal_7 from '../../images/photo_gallary/gal_7.jpg';
import gal_8 from '../../images/photo_gallary/gal_8.jpg';

import SingleGalleryPhoto from './SingleGalleryPhoto';

const gallery = [
    {
        img: gal_1
    },
    {
        img: gal_2
    },
    {
        img: gal_3
    },
    {
        img: gal_4
    },
    {
        img: gal_5
    },
    {
        img: gal_6
    },
    {
        img: gal_7
    },
    {
        img: gal_8
    }
]
const PhotoGalary = () => {
    return (
        <div className="gallery">
            <div className="gallery-header mt-5 pt-5">
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <img style={{ height: '50px'}} src={logo}/>
                    <h1 className="ml-3">Photo Gallery</h1>
                </div>
            </div>
            <div className="container mt-5 pt-5">
                <div className="row">                   
                        {
                            gallery.map(images => <SingleGalleryPhoto image={images}></SingleGalleryPhoto>)
                        } 
                </div>
            </div>
        </div>
    );
};

export default PhotoGalary;