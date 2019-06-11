import React, { Component } from 'react';
import Slider from './Slider';

const images = [
    "https://clubmed.infobae.com/img/bg-sections.jpg",
    "https://clubmed.infobae.com/img/ARPC.jpg",
    "https://clubmed.infobae.com/img/bg-sections.jpg",
    "https://clubmed.infobae.com/img/ARPC.jpg"
];

export default class Home extends Component {
    render() {
        return (

            <section className="carrusel-block-section">
                <div className="wrapper-carrusel-block container-wide-section">
                    <div className="carrusel-block">
                        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }} /> */}
                        <Slider
                            options={{
                                autoPlay: 4000,
                                pauseAutoPlayOnHover: true,
                                wrapAround: true,
                                fullscreen: true,
                                adaptiveHeight: true,
                                imagesLoaded: true
                            }}
                        >
                            {images.map((image, index) => (
                                <div style={{ width: '100%' }} key={index}>
                                    <img src={image} alt={`${index}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}


