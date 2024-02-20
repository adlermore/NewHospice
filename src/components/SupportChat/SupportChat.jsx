import React, { memo } from "react";
import '../../assets/scss/SupportChat/_supportChat.scss';
import { Link } from "react-router-dom";

const SupportChat = () => {
    return (
        <Link to='/contactUs/' className="btn-call">
            <div className="btn-call__ico">
                Send Message
            </div>
        </Link>
    )
}

export default memo(SupportChat);