import React from 'react'
import '../style/Categories.css'
import { Link } from 'react-router-dom'

export default function Categories() {

    return (
        <div style={{ borderTop: "1px solid grey" }} className='pt-3'>
            <div>
                <h2 className='section-header__title show-sep text-center' style={{ margin: "15px 0" }}>Shop By <span style={{ color: "#ff4f33" }}>Categories</span></h2>
            </div>
            <div className='Categories-Main d-flex justify-content-around flex-wrap'>
                {/* <div className=' '> */}
                <div className='Categories_Img_Cart'>
                    <div className='categories_img'>
                        <Link to={`/Luxe`}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/luxe-edition_1024x1024.png?v=1690276328" alt="" />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'><h3><b>Luxe edition</b></h3></div>
                </div>
                <div className='Categories_Img_Cart'>
                    <div className='categories_img'>
                        <Link to={`/bluetooth`}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/bluetooth-calling_1024x1024.png?v=1690280196" alt="" />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'><h3><b>Bluetooth calling</b></h3></div>
                </div>
                <div className='Categories_Img_Cart'>
                    <div className='categories_img'>
                        <Link to={`/Amoled`}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/amoled-display_1024x1024.png?v=1690280196" alt="" />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'><h3><b>Amoled display</b></h3></div>
                </div>
                <div className='Categories_Img_Cart'>
                    <div className='categories_img'>
                        <Link to={`/Outdoor`}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/outdoor-series_1024x1024.png?v=1690280196" alt="" />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'><h3><b>Outdoor series</b></h3></div>
                </div>
                <div className='Categories_Img_Cart'>
                    <div className='categories_img'>
                        <Link to={`/Ninja`}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/ninja-series_1024x1024.png?v=1690280196" alt="" />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'><h3><b>Ninja series</b></h3></div>
                </div>
                <div className='Categories_Img_Cart'>
                    <div className='categories_img'>
                        <Link to={`/Audio`}>
                            <img src="https://www.fireboltt.com/cdn/shop/files/audio-series_1024x1024.png?v=1690280196" alt="" />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'><h3><b>Audio series</b></h3></div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
