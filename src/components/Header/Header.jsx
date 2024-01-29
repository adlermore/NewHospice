import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imglogo from '../../assets/img/main_logo.png';
import "uikit/dist/css/uikit.min.css";
import { Twirl as Hamburger } from 'hamburger-react'
import { BiPlus } from 'react-icons/bi';

const Header = () => {

    const [isOpen, setOpen] = useState(false)
    const body = document.body;

    let menuOpen = () => {
        if (!body.classList.contains('menu-opened')) {
            setOpen(true);
            body.classList.add('menu-opened')
        } else {
            setOpen(false);
            body.classList.remove('menu-opened')
        }
    }

    let submenuBtnRender = () => {
        const mobileMenuList = document.querySelectorAll('.submenu');
        mobileMenuList.forEach(element => {
            let sublevelText = element.querySelector('a').text;
            const newDiv = document.createElement('button');
            newDiv.className = 'backBtn icon-down';
            newDiv.textContent = sublevelText;
            newDiv.onclick = prevMenuButton;
            if (!element.classList.contains('createdLink')) {
                element.querySelector('.uk-navbar-dropdown-nav').appendChild(newDiv);
                element.classList.add('createdLink');
            }
        });
    }

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    function ShowWindowDimensions() {
        const [width] = useWindowSize();
        if (width <= 991) {
            if (!body.classList.contains('mobile-version')) {
                body.classList.add('mobile-version')
                submenuBtnRender();
            }
        } else {
            body.classList.remove('mobile-version')
        }
    }

    function subMenuOpen(e) {
        e.currentTarget.parentElement.nextElementSibling.classList.add('submenu-open')
    }

    const prevMenuButton = (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove('submenu-open')
    }

    if (window.innerWidth <= 991) {
        submenuBtnRender();
    }

    ShowWindowDimensions();

    return (
        <header className="header_wrapper">
            <div className="header_top">
                <div className="custom_container">
                    <div className="top_inline">
                        <button className="site_btn call_btn">+1 888-965-9595</button>
                        <a className="main_logo" href="/#">
                            <img src={imglogo} alt="imgLogo" />
                        </a>
                        <a href="/#" className="site_btn book_btn">Physicians Referral</a>
                    </div>
                </div>
            </div>
            <div className="page_header">
                <div className="custom_container">
                    <div className="header_inner">
                        <div className={!isOpen ? "navbar_container" : "navbar_container menu-open"}>
                            <div className="navbar_inner" id="navbar_inner">
                                <div className="menu_container">
                                    <div className="main_menu">
                                        <nav className="page-nav" data-uk-navbar>
                                            <ul className="uk-navbar-nav">
                                                <li><a href="/#">About us</a></li>
                                                <li className="submenu">
                                                    <span className="link-wrapper">
                                                        <a href="/#"> Service</a>
                                                        <BiPlus className="inner_link" onClick={subMenuOpen} />
                                                    </span>
                                                    <div className="uk-navbar-dropdown ">
                                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                                            <li><Link to="/">Services Level 2</Link></li>
                                                            <li><Link to="/">Services Level 2</Link></li>
                                                            <li><Link to="/">Services Level 2</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><a href="/#">Join our team</a></li>
                                                <li><a href="/#">Service Areas</a></li>
                                                <li><a href="/#">Blog</a></li>
                                                <li><a href="/#">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Hamburger toggled={isOpen} toggle={menuOpen} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;