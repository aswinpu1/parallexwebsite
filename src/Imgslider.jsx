import React from 'react';
import Slider from 'react-slick';
import './Imgslider.css'
import aadiyogi from './assets/adiyogi.avif'
import tajmahal from './assets/tajmahal.webp'
import everest from './assets/eversst.jpg'
import wallofchina from './assets/wall of china.jpg'
import temple from './assets/temple.webp'
import "slick-carousel/slick/slick.css";         // Import slick styles
import "slick-carousel/slick/slick-theme.css";   // Import slick theme styles




const ImageSlider = () => {
    var settings = {
        // Enable dots navigation
        infinite: true,       // Infinite looping
        speed: 500,           // Transition speed
        slidesToShow: 1,      // Number of slides to show
        slidesToScroll: 1,    // Number of slides to scroll at a time
        autoplay: true,
        accessibility: false,
        arrows: false,
        autoplaySpeed: 2000,
    };

    return (
        <Slider  {...settings}>
            <div>
                <div style={{position:"relative"}}>
                    <img style={{
                        height: "100%",
                        width: "100%",
                    }} src={aadiyogi} alt="" />
                    <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'traslate(-50%, -50%)', fontSize: "30px", color: 'white'}}>ADIYOGI</p>
                </div>
            </div>
            <div>
                <div style={{position:"relative"}}>
                    <img style={{
                        height: "100%",
                        width: "100%",
                    }} src={tajmahal} alt="" />
                    <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'traslate(-50%, -50%)', fontSize: "30px", color: 'white'}}>TAJMAHAL</p>
                </div>
            </div>
            <div>
                <div style={{position:"relative"}}>
                    <img style={{
                        height: "100%",
                        width: "100%",
                    }} src={everest} alt="" />
                    <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'traslate(-50%, -50%)', fontSize: "30px", color: 'white'}}>EVEREST</p>
                </div>
            </div>
            <div>
                <div style={{position:"relative"}}>
                    <img style={{
                        height: "100%",
                        width: "100%",
                    }} src={temple} alt="" />
                    <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'traslate(-50%, -50%)', fontSize: "30px", color: 'white'}}>PADMANABHA TEMPLE</p>
                </div>
            </div>
            <div>
                <div style={{position:"relative"}}>
                    <img style={{
                        height: "100%",
                        width: "100%",
                    }} src={wallofchina} alt="" />
                    <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'traslate(-50%, -50%)', fontSize: "30px", color: 'white'}}>WALL OF CHINA</p>
                </div>
            </div>
            
        </Slider>
        
    );
};

export default ImageSlider;


{/* <div className='image-container' style={{ position: 'relative' }}>
                    <img src={aadiyogi} alt="Slide 1" style={{ width: '100%' }} />
                    <h3 className='text-overlay' style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        zIndex: 1000,
                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        ADIYOGI
                    </h3>
                </div>
                <div className='image-container' style={{ position: 'relative' }}>
                    <img src={wallofchina} alt="Slide 1" style={{ width: '100%' }} />
                    <h3 className='text-overlay' style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',

                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        WALL OF CHINA
                    </h3>
                </div>

                <div className='image-container' style={{ position: 'relative' }}>
                    <img src={everest} alt="Slide 1" style={{ width: '100%' }} />
                    <h3 className='text-overlay' style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',

                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        MOUNT EVEREST
                    </h3>
                </div>

                <div className='image-container' style={{ position: 'relative' }}>
                    <img src={temple} alt="Slide 1" style={{ width: '100%' }} />
                    <h3 className='text-overlay' style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',

                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        PADMANABA TEMBLE
                    </h3>
                </div>

                <div className='image-container' style={{ position: 'relative' }}>
                    <img src={tajmahal} alt="Slide 1" style={{ width: '100%' }} />
                    <h3 className='text-overlay' style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        fontSize: "50PX",
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        TAJ MAHAl
                    </h3>
                </div> */}