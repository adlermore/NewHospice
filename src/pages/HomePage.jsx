
import React from 'react';
import heroImg from '../assets/img/heroImg.png';
import '../assets/scss/HomePage/_homePage.scss';

const HomePage = () => {

    return (
       <div className="homepage_wrapper">
            <div className="hero_section">
                <img src={heroImg} alt='heroImg' />
                <div className="custom_container">
                    <div className="banner_info">
                        Where Love and care never end...
                   </div>        
                </div>
            </div>
       </div>
    )
}

export default HomePage;