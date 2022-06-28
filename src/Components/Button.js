import React from 'react';

const DEFAULT_BTN_STYLING = "text-4xl m-[1rem] flex-1 bg-gray-400 border-black border-2 px-4 rounded-xl";

export default function Button({content, onClick, styling, ...otherProps}) {
    styling ??= DEFAULT_BTN_STYLING
    return (
        <button onClick={onClick} className={styling}>{content}</button>
    );
}
