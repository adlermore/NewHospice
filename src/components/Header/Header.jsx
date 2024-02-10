import React, { useEffect, useState, useRef, memo } from "react";
import { Link } from "react-router-dom";
import imglogo from '../../assets/img/main_logo.png';
import "uikit/dist/css/uikit.min.css";
import { Twirl as Hamburger } from 'hamburger-react'
import { BiPlus } from 'react-icons/bi';
import { Scrollbar } from 'react-scrollbars-custom';

const Header = () => {
    const body = document.body;

    const [isOpen, setOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirectionUp, setScrollDirectionUp] = useState(false);
    const headerRef = useRef(null);
    const pageheaderRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > scrollY) {
                setScrollDirectionUp(false);
            } else {
                setScrollDirectionUp(true);
            }
            if (window.innerWidth > 767) {
                setScrollY(currentScrollY);
            } else {
                headerRef.current.classList.remove('header_fix')
            }
        };

        if (window.scrollY <= pageheaderRef.current.clientHeight) {
            headerRef.current.classList.remove('header_fix')
        }
        else if (window.scrollY >= pageheaderRef.current.clientHeight && !scrollDirectionUp) {
            headerRef.current.classList.add('header_fix');
        }
        if (window.scrollY >= document.body.offsetHeight - window.innerHeight - 10) {
            document.body.classList.add('support_fixed');
        } else {
            document.body.classList.remove('support_fixed');
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY, scrollDirectionUp]);


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
        <header ref={headerRef} className="header_wrapper">
            <div className="header_top" ref={pageheaderRef}>
                <div className="custom_container">
                    <div className="top_inline">
                        <a href="tel:+1 888-965-9595" className="site_btn call_btn">+1 888-965-9595</a>
                        <a className="main_logo" href="/#">
                            <img src={imglogo} alt="imgLogo" />
                        </a>
                        <Link to='physicians/' className="site_btn book_btn">Physicians Referral</Link>
                    </div>
                </div>
            </div>
            <div className="page_header" >
                <div className="custom_container">
                    <div className="header_inner">
                        <div className={!isOpen ? "navbar_container" : "navbar_container menu-open"}>
                            <div className="navbar_inner" id="navbar_inner">
                                <a href="tel:+1 888-965-9595" className="site_btn call_btn">+1 888-965-9595</a>
                                <div className="menu_container">
                                    <div className="main_menu">
                                        <nav className="page-nav" data-uk-navbar>
                                            <ul className="uk-navbar-nav">
                                                <li><Link to="aboutUs/">About us</Link></li>
                                                <li className="submenu">
                                                    <span className="link-wrapper">
                                                        <Link to="services/all" > Service</Link>
                                                        <BiPlus className="inner_link" onClick={subMenuOpen} />
                                                    </span>
                                                    <div className="uk-navbar-dropdown ">
                                                        <Scrollbar style={{ width: 180, height: 250 }}>
                                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                                <li><Link to="services/service1">Services 1</Link></li>
                                                                <li><Link to="services/service2">Services 2</Link></li>
                                                                <li><Link to="services/service3">Services 3</Link></li>
                                                                <li><Link to="services/service4">Services 4</Link></li>
                                                                <li><Link to="services/service5">Services 5</Link></li>
                                                                <li><Link to="services/service6">Services 6</Link></li>
                                                                <li><Link to="services/service7">Services 7</Link></li>
                                                                <li><Link to="services/service8">Services 8</Link></li>
                                                                <li><Link to="services/service9">Services 9</Link></li>
                                                                <li><Link to="services/service10">Services 10</Link></li>
                                                                <li><Link to="services/service11">Services 11</Link></li>
                                                                <li><Link to="services/service12">Services 12</Link></li>
                                                            </ul>
                                                        </Scrollbar>
                                                    </div>
                                                </li>
                                                <li><Link to="joinUs/">Join our team</Link></li>
                                                <li><Link to="serviceAreas/">Service Areas</Link></li>
                                                <li><Link to="blog/">Blog</Link></li>
                                                <li><Link to="contactUs/">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <a href="/#" className="site_btn book_btn">Physicians Referral</a>
                            </div>
                        </div>
                        <Hamburger toggled={isOpen} toggle={menuOpen} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Header);