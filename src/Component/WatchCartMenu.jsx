import React from 'react';
import '../style/WatchCartMenu.css';
import { Link } from 'react-router-dom';

export default function WatchCartMenu() {
    return (
        <div className='main'>
            <div className="watch-container">
                {/* {watch_Data.slice(0, 8).map((item, i) => ( */}
                <>
                    <div className='cart'>
                        <div className='Img_main'>
                            <Link to={"/Grenade"}>
                                <img src="https://www.fireboltt.com/cdn/shop/files/grenade-black-steel_1_95x.png?v=1713423176" className='' alt="" />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Grenade</h6>
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='Img_main'>
                            <Link to={"/Sphere"}>
                                <img src="https://www.fireboltt.com/cdn/shop/files/sphere-camo-black_1_95x.png?v=1713876586" className='' alt="" />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Sphere</h6>
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='Img_main'>
                            <Link to={"/Supernova"}>
                                <img src="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" className='' alt="" />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Supernova</h6>
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='Img_main'>
                            <Link to={"/Avalanche"}>
                                <img src="https://www.fireboltt.com/cdn/shop/files/black_2_95x.png?v=1714652268" className='' alt="" />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Avalanche</h6>
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='Img_main'>
                            <Link to={"/Quantum"}>
                                <img src="https://www.fireboltt.com/cdn/shop/files/1_f852e961-6047-4267-8c5b-b4ee9fdc4b09_95x.png?v=1714462154" className='' alt="" />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Quantum</h6>
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='Img_main'>
                            <Link to={"/Blizzard"}>
                                <img src="https://www.fireboltt.com/cdn/shop/files/blizzard-black-rose-gold_2_95x.png?v=1714467184" className='' alt="" />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Blizzard</h6>
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='Img_main'>
                           <Link to={"/Cyclone"}>
                           <img src="https://www.fireboltt.com/cdn/shop/files/cyclone-black_1_95x.png?v=1687418762" className='' alt="" />
                           </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Cyclone</h6>
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='Img_main'>
                            <Link to={"/VisionaryUltra"}>
                            <img src="https://www.fireboltt.com/cdn/shop/products/2-1_0016_Layer-2_95x.png?v=1714382215" className='' alt="" />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h6>Visionary Ultra</h6>
                        </div>
                    </div>
                </>
                {/* ))} */}
            </div>
        </div>
    );
}
