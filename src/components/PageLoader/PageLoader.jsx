import React, { memo } from "react";
import '../../assets/scss/PageLoader/_pageLoader.scss';

const PageLoader = () => {
    return (
        <div className="loader_wrapper">
            <div className="loader_inner">
                
            </div>
        </div>
    )
}

export default memo(PageLoader);