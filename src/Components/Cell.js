import React from 'react';

const CONSTANT_STYLING = "aspect-square outline m-0 p-2";
const CHANGEABLE_STYLING = "w-10 bg-gray-500 outline-1 outline-black"

export default function Cell({ number, className, ...otherProps }) {
    return (
        <div className={CONSTANT_STYLING + " " + className ?? CHANGEABLE_STYLING} {...otherProps} />
        
        
    );
}
