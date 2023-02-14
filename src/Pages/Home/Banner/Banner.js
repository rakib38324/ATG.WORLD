import React from 'react';
import Card from 'react-bootstrap/Card';
import img from '../../../Images/try1.jpg'

const Banner = () => {
    return (
        <div className=''>
            <Card className=" text-white position-relative">
                <Card.Img className='img-fluid' src={img} alt="Card image" />
                <Card.ImgOverlay className='container position-absolute top-50 start-0 '>
                    <Card.Title className='fs-2  position-absolute bottom-50 start-0 fw-bolder '>Computer Engineer <br />
                    <span className='fs-6'>142,785 Computer Engineers Follow this</span>
                    </Card.Title>
                    

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;