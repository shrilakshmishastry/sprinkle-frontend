import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';
import Dropdown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



const NavBarSprinkle = () => {
    let location = useLocation().pathname;
    let email = useSelector(state => state.userReducer.userInfo.email);

    useEffect(() => {
        var ele = document.getElementById("sprinkleNavbar");
        var btn = document.getElementById("sprinkleNavToggler");

        if (ele.classList.contains("show")) {
            btn.setAttribute("aria-expanded", "false");
            btn.classList.add("collpased");
            ele.classList.remove("show");
        }

    }, [location]);

    function handleClick() {
        var ele = document.getElementById("sprinkleNavbar");
        var btn = document.getElementById("sprinkleNavToggler");

        if (ele.classList.contains("show")) {
            btn.setAttribute("aria-expanded", "false");
            btn.classList.add("collpased");
            ele.classList.remove("show");
        }
    }

    const activeLink = "active fw-bolder dark-text-color mt-2 mt-lg-0  me-4 nav-link";
    const inactiveLink = "inactive dark-text-color fw-normal me-4  mt-2 mt-lg-0 nav-link";

    // const userInfo = useSelector(state => state.userReducer.userInfo.email);
    const activeLinkDropDown = "dropdown-item  fw-bolder dark-text-color mt-2 mt-lg-0  me-4";
    const inactiveLinkDropDown = "dropdown-item fw-normal me-4  mt-2 mt-lg-0";

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand ms-lg-5 primary-text-color" to="/">
                    Sprinkle
                </Link>
                <button id="sprinkleNavToggler" className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#sprinkleNavbar"
                    aria-controls="sprinkleNavbar" aria-expanded="false"
                    aria-label="Button to open list of links"
                >
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div id="sprinkleNavbar" className=" collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto d-flex align-items-center mb-2 mb-lg-0">
                        <li className="nav-item" onClick={handleClick}>
                            <Link to="/" className={location === '/' ? activeLink : inactiveLink}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to="/products" className={location === '/products' ? activeLink : inactiveLink}>
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to="/about-us" className={location === '/about-us' ? activeLink : inactiveLink}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to="/cart" className={location === '/cart' ? activeLink : inactiveLink}>
                                Cart
                            </Link>
                        </li>
                    </ul>
                    <Dropdown.Divider />

                    <ul className="navbar-nav  d-grid  ms-auto  mb-2 mb-lg-0">
                        {
                            email === ""
                                ?

                                <Link to="/login" className="btn  primary-color rounded   ps-5 pe-5  text-center text-white">
                                    Login
                                </Link>

                                :

                                <li className="nav-item dropdown">
                                    <button className="ps-5 pe-5 btn primary-text-color fw-bold nav-link dropdown-toggle" id="prfileDropDown"
                                        data-bs-toggle="dropdown" aria-label="Menu to profile and logout" aria-expanded="false"
                                    >
                                        Hi, Hari &nbsp;
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="profileDropDown">
                                        <li>
                                            <Link to="/user-profile" className={location === '/cart' ? activeLinkDropDown : inactiveLinkDropDown}>
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user-profile" className={location === '/cart' ? activeLinkDropDown : inactiveLinkDropDown}>
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBarSprinkle;