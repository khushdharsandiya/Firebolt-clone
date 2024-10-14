
import React, { useState } from 'react';
import '../style/FireHeader.css';
import { Link, useNavigate } from 'react-router-dom';
import Audio_Data from '../Data/AudioCart';
import watch_Data from '../Data/Watch';
import Calling_Data from '../Data/HeaderData/Calling';
import Essential_data from '../Data/HeaderData/Essential';
import Luxe_data from '../Data/HeaderData/Luxe';
import Ninja_data from '../Data/HeaderData/Ninja';
import Outdoor_Data from '../Data/HeaderData/Outdoor';
import Women_collection from '../Data/HeaderData/Women_collection';
import AmoledDisplay_Data from '../Data/HeaderData/AmoledDisplay';

const products = [
    ...watch_Data,
    ...Audio_Data,
    ...AmoledDisplay_Data,
    ...Calling_Data,
    ...Essential_data,
    ...Luxe_data,
    ...Ninja_data,
    ...Outdoor_Data,
    ...Women_collection
];

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [, setFilteredData] = useState([]);
    const navigate = useNavigate();




    const [showInput, setShowInput] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleIconClick = () => {
        setShowInput(!showInput);
    };

    const handleMenuIconClick = () => {
        setMenuVisible(!menuVisible);
    };


    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.length > 0) {
            const filtered = products.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
            navigate('/search', { state: { searchQuery, filteredData: filtered } });
        } else {
            setFilteredData([]);
        }
    };

    return (
        <div className='sticky-top bg-light'>
            <div className="Fire_Header ">
                <div className='Fire_Logo_Img'>
                    <img src="https://www.fireboltt.com/cdn/shop/files/Background_150x.png?v=1620478900" alt="Fireboltt Logo" />
                </div>
                <div className={`Fire_Menubar ${menuVisible ? 'visible' : ''}`}>
                    <ul className="Fire_UL_Menu">
                        <li>
                            <Link className="nav-link nav-link-1 text-dark" to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link nav-link-1 text-dark" to={"/Product"}>
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link nav-link-1 text-dark" to={"/Categories"}>
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link nav-link-1 text-dark" to={"/BestWatch"}>
                                Best-Watch
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link nav-link-1 text-dark" to={"/BestAudio"}>
                                Audio
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='Fire_Search_Bar'>
                    <div className='d-flex justify-content-around align-products-center '>
                        <button className="Search_Icon" onClick={handleIconClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                        <Link className='AddToCart_Icon' to={"/AddToCart"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                            </svg>
                        </Link>
                        <Link className='Login_User_Icon' to={"/Login_button"} >
                            <button className='Fire_User'>
                                <svg width="21" height="21" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                            </button>
                        </Link>
                        <button className='Menu_icon' onClick={handleMenuIconClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            {showInput && (
                <div className="search-input-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            outline: "none",
                            padding: "7px"
                        }}
                    />
                    <Link className='FireHeader-ClickSearch' to={"/SearchProduct"} onClick={handleSearchSubmit}>Search</Link>
                    <Link className='Login_User_Icon' to={"/Filter_Icon"} >
                        <button className='Fire_User'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}