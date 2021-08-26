import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';
import Dropdown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProfileData } from '../../redux/actions/profileAction';
import { modalLogin } from '../../redux/actions/modalLogin';



const NavBarSprinkle = () => {
    let location = useLocation().pathname;
    let name = useSelector(state => state.userReducer.userInfo);
    const dispatch = useDispatch();

    const links = [
        "/",
        "/products",
        "/about-us",
        "/cart"
    ];
    const names = [
        "Home",
        "Shop",
        "About",
        "Cart"
    ];

    useEffect(() => {
        var ele = document.getElementById("sprinkleNavbar");
        var btn = document.getElementById("sprinkleNavToggler");

        if (ele.classList.contains("show")) {
            btn.setAttribute("aria-expanded", "false");
            btn.classList.add("collpased");
            ele.classList.remove("show");
        }

    }, [location]);

    function handleLogout() {
        removeProfileData(name)(dispatch);
    }

    function handleLogin(){
        modalLogin(true)(dispatch);
    }


    function handleClick() {
        var ele = document.getElementById("sprinkleNavbar");
        var btn = document.getElementById("sprinkleNavToggler");

        if (ele.classList.contains("show")) {
            btn.setAttribute("aria-expanded", "false");
            btn.classList.add("collpased");
            ele.classList.remove("show");
        }
    }

    function linkGenerator(path, name) {
        return (
            <li key={path} className="nav-item" onClick={handleClick}>
                <Link to={path} className={location === path ? activeLink : inactiveLink}>
                    {name}
                </Link>
            </li>
        );
    }

    const activeLink = "active fw-bolder dark-text-color mt-2 mt-lg-0  me-4 nav-link";
    const inactiveLink = "inactive dark-text-color fw-normal me-4  mt-2 mt-lg-0 nav-link";


    const activeLinkDropDown = "dropdown-item  fw-bolder dark-text-color mt-2 mt-lg-0  me-4";
    const inactiveLinkDropDown = "dropdown-item fw-normal me-4  mt-2 mt-lg-0";

    return (

        <nav className="navbar navbar-expand-lg pt-3 navbar-light bg-white">
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
                        {
                            links.map((e, index) => {
                                return (
                                    linkGenerator(e, names[index])
                                )
                            })
                        }

                    </ul>
                    <Dropdown.Divider />

                    <ul className="navbar-nav  d-grid  ms-auto  mb-2 mb-lg-0">
                        {
                            name.name === ""
                                ?

                                <button
                                 onClick={handleLogin}
                                 className="btn primary-color text-white ps-5 pe-5 ">
                                    Login
                                </button>

                                :

                                <li className="nav-item dropdown">
                                    <button className="ps-5 pe-5 btn primary-text-color fw-normal nav-link dropdown-toggle" id="prfileDropDown"
                                        data-bs-toggle="dropdown" aria-label="Menu to profile and logout" aria-expanded="false"
                                    >
                                        Hi, {name.name} &nbsp;
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="profileDropDown">
                                        <li>
                                            <Link to="/user-profile" className={location === '/user-profile' ? activeLinkDropDown : inactiveLinkDropDown}>
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/order-history" className={location === '/order-history' ? activeLinkDropDown : inactiveLinkDropDown}>
                                                Order History
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout} className="btn ">
                                                Logout
                                            </button>

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