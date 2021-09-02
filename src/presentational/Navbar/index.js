import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';
import Dropdown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProfileData } from '../../redux/actions/profileAction';
import { modalLogin } from '../../redux/actions/modalLogin';
import { Links, profileLinks } from '../../Data/Navbar/links';
import LinkGenerator from './UI/linkGenerator';
import DropDownGenerator from './UI/dropDownGenerator';


const NavBarSprinkle = () => {
    const location = useLocation().pathname;
    const info = useSelector(state => state.userReducer.userInfo);
    const name = info !== undefined ?  info.name :"";
    const dispatch = useDispatch();




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
        window.localStorage.clear();
        removeProfileData(name)(dispatch);
    }

    function handleLogin() {
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
                            Links.map((e) => {
                                return (
                                    <LinkGenerator
                                        key={e.link}
                                        path={e.link}
                                        name={e.name}
                                        handleClick={handleClick}
                                    />
                                )
                            })
                        }

                    </ul>
                    <Dropdown.Divider />

                    <ul className="navbar-nav  d-grid  ms-auto  mb-2 mb-lg-0">
                        {
                            name === ""
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
                                        Hi, {name}
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="profileDropDown">
                                        {
                                            profileLinks.map((val) => {
                                                return (
                                                    <DropDownGenerator
                                                        key={val.link}
                                                        name={val.name}
                                                        pathName={val.link}
                                                    />
                                                );
                                            })
                                        }

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