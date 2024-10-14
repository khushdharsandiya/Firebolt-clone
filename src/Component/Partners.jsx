import React from 'react'
import '../style/Partners.css';
import { Link } from 'react-router-dom';


export default function Partners() {
    return (
        <>
            <div style={{ borderTop: '1px solid gray', marginTop: '10px' }}>
                <div className='press'>
                    <div>
                        <h2 className='section-header__title show-sep text-center mt-4'>
                            In The <span style={{ color: "#ff4f33" }}>Press</span>
                        </h2>
                        <p className='dk'>Places where we have been featured</p>
                    </div>
                </div>
                <div style={{ borderBottom: '1px solid gray' }} className='images'>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-2_2.png?v=1624868965" alt="" />
                    </div>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-4_2.png?v=1624869125" alt="" />
                    </div>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-3_2.png?v=1624869051" alt="" />
                    </div>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-7_2.png?v=1624869221" alt="" />
                    </div>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-5_2.png?v=1624869158" alt="" />
                    </div>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-8_2.png?v=1624869221" alt="" />
                    </div>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-6_2.png?v=1624869180" alt="" />
                    </div>
                    <div>
                        <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-1_2.png?v=1624868909" alt="" />
                    </div>
                </div>


                <div className='press'>
                    <h2 className='mt-4 section-header__title show-sep text-center'>Official
                        <span style={{ color: "#ff4f33" }}>Partners</span>
                    </h2>

                </div>

                <div className='image'>
                    <div>
                        <Link to={"https://rb.gy/byx556"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-6_180x.png?v=1624865581" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://rb.gy/44s7ry"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-5_180x.png?v=1624865609" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://rb.gy/u28dsb"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-7_180x.png?v=1624865640" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://www.croma.com/fire-boltt-smart-watches/bc/b-1219-931"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-4_180x.png?v=1624865676" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://rb.gy/f9qvrn"}>
                            <img className='img1' src="https://www.fireboltt.com/cdn/shop/files/Poorvika_horizontal_English_LOGO_180x.png?v=1631852958" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://www.vijaysales.com/mobiles-and-tablets/brand/buy-fire-boltt-mobile-phone"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-8-1_180x.png?v=1624865656" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://www.nykaa.com/brands/fire-boltt/c/14867"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-2_180x.png?v=1624865629" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://paytmmall.com/"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-1_180x.png?v=1624865647" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://www.tatacliq.com/fire-boltt/c-mbh12b11998/page-1"}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-3_180x.png?v=1624865548" alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://www.sangeethamobiles.com/brand/fire-boltt-65"}> <img className='img1' src="https://www.fireboltt.com/cdn/shop/files/Sangeetha_Logo_Blue_Background-ai_d1080b1b-ee5c-47e6-9808-0e2b0d864532_180x.jpg?v=1658904660" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}
