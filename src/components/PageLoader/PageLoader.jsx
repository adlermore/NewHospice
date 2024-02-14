import React, { memo } from "react";
import '../../assets/scss/PageLoader/_pageLoader.scss';
import logoAnimate from '../../assets/img/logoAnimate.png';
import textAnimate from '../../assets/img/textAnimate.png';

const PageLoader = () => {
    return (
        <div className="loader_wrapper">
            <div className="loader_inner">
                <div className="logo_center">
                    <img src={logoAnimate} alt="logoAnimate" />
                </div>
                <div className="textAnimate">
                    <img src={textAnimate} alt="textAnimate" />
                </div>
            </div>
        </div>
    )
}

export default memo(PageLoader);