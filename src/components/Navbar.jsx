import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div id="nav-body">
                    <div id="nav-title">
                        {/* <Link to="/"> */}
                            <p id="nav-p1">Tiny Chunk</p>
                        {/* </Link> */}
                        <p id="nav-p2">(Shorten your web links countlessly)</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar