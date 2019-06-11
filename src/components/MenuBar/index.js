import React from 'react'

export default function MenuBar() {
    return (
        <div className="left-sidebar">
            <div className="logo-img">
                <img src="img/MadOverMode-logo.png" alt="MadOverMode Logo" />
            </div>
            <div className="menu-bar">

                <div className="categories">
                <ul>
                    <li>Home</li>
                    <li>Jewellery</li>
                    <li>Catalogue</li>
                    <li>Shop</li>
                </ul>
                </div>
            </div>
            <div className="foot-note">
                <p>&copy; 2019 <br /> MadOverMode</p>
            </div>
    </div>
    )
}
