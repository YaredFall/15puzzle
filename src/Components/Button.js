import React from 'react';

const DEFAULT_BTN_STYLING = "text-[2em] m-[0.75em] flex-1 bg-blue-200 border-black border-2 px-[1em]] rounded-xl outline-none" +
    " hover:outline-black :outline-auto hover:border-white focus-visible:border-white focus-visible:outline-black";

export default function Button({content, onClick, styling, ...otherProps}) {
    styling ??= DEFAULT_BTN_STYLING
    return (
        <button onClick={onClick} className={styling}>{content}</button>
    );
}
