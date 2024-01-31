import React, { memo } from "react";
import '../../assets/scss/SupportChat/_supportChat.scss';

const SupportChat = () => {
    return (
        <a href="tel: 8 888 888 88 88" rel="nofollow" class="btn-call">
            <div class="btn-call__ico">
                Support chat
            </div>
        </a>
    )
}

export default memo(SupportChat);