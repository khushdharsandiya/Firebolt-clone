import React from 'react'
import '../style/Slider.css'

export default function Slider() {
    return (
        <div>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
                    <div className="carousel-item">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_09cfd372-8315-4bfb-b909-e9bafa033efc_1759x.jpg?v=1713184372" alt="" />
                    </div>
                    <div className="carousel-item ">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_3_89a63cc5-ec74-4a23-8ca5-d8d20f4832b5_1759x.png?v=1715690487" alt="" />
                    </div>
                    <div className="carousel-item ">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_aab27cbd-21fb-488a-a097-6fc4c7a80e78_1759x.jpg?v=1712753303" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_154_1759x.jpg?v=1713855129" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_1_57_1759x.png?v=1715578229" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_53e5b386-346a-4b30-966b-d947081ecbdf.png?v=10106045342136813929" className="d-block w-100" alt="..." />
                    </div>

                </div>

                <button class="carousel-control-prev" type="button">
                    <span class="carousel-control-prev-icon" aria-hidden="true" data-bs-target="#carouselExampleControls" data-bs-slide="prev"></span>
                    {/* <span class="visually-hidden">Previous</span> */}
                </button>
                <button class="carousel-control-next" type="button"  >
                    <span class="carousel-control-next-icon" aria-hidden="true" data-bs-slide="next" data-bs-target="#carouselExampleControls"></span>
                    {/* <span class="visually-hidden">Next</span> */}
                </button>


            </div>

        </div>
    )
}
