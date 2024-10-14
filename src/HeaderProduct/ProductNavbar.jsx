import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../style/HeaderProduct/ProductNavbar.css'; // Import the CSS file

export default function ProductNavbar() {
    return (
        <div className='product-navbar' style={{ height: "92.3vh" }}>
            <div className='navbar-menu' >
                <ul>
                    <NavLink className='Link ' to="HeadLuxe" activeClassName="active">
                        <li><b>Luxe</b></li>
                    </NavLink>
                    <NavLink className='Link ' to="HeadOutdoor" activeClassName="active">
                        <li><b>Outdoor</b></li>
                    </NavLink>
                    <NavLink className='Link ' to="HeadAmoled" activeClassName="active">
                        <li><b>Amoled Series</b></li>
                    </NavLink>
                    <NavLink className='Link ' to="HeadCalling" activeClassName="active">
                        <li><b>Calling Series</b></li>

                    </NavLink>
                    <NavLink className='Link ' to="HeadNinja" activeClassName="active">
                        <li><b>Ninja Series</b></li>
                    </NavLink>
                    <NavLink className='Link ' to="HeadEssential" activeClassName="active">
                        <li><b>Essential</b></li>
                    </NavLink>
                    <NavLink className='Link ' to="HeadAudio" activeClassName="active">
                        <li><b>Audio</b></li>
                    </NavLink>
                    <NavLink className='Link ' to="HeadWomen" activeClassName="active">
                        <li><b>Women Collection</b></li>

                    </NavLink>
                </ul>
            </div>
            <div className='navbar-content'>
                <Outlet />
            </div>
        </div>
    );
}
