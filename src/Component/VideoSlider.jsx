import React from 'react';
import '../style/VideoSlider.css';
import Cart_Video_Data from '../Data/CartSlider';

export default function VideoSlider() {
    return (
        <>
        <div style={{borderTop:"1px solid grey" ,marginTop:"20px"}}/>
            <div className='mt-4 mb-4' >
                <div className="page-width">
                    <div className="section-header">
                        <h2 className="section-header__title show-sep text-center">
                            Explore <span style={{ color: "#ff4f33" }}>Bestsellers</span>
                        </h2>
                    </div>
                </div>
                <div className="img-container">
                    {Cart_Video_Data.map((item, i) => (
                        <div key={i} className="video-wrapper">
                            <video
                                className="video-div"
                                autoPlay
                                muted
                                loop
                            >
                                <source src={item.video} />
                            </video>
                            <h5 className="h5">{item.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
