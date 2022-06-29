import React from 'react';

export default function WinCongrats({children, ...props}) {
    return (
        <div
            className="absolute inset-[-100px] outline-8 outline outline-gray-400 flex content-center items-center justify-center animate-fadeIn">
            <div className="animate-pulse">{children}</div>
        </div>
    );
}