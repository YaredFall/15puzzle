import React from 'react';

const DEFAULT_BTN_STYLING = "text-[2em] m-[0.75em] flex-1 bg-secondary border-quaternary border-[0.0625em] px-[1em]] outline-none" +
    " hover:outline-primary hover:border-accent focus-visible:border-accent focus-visible:outline-primary";

export default function Button({content, onClick, styling, ...otherProps}) {
    styling ??= DEFAULT_BTN_STYLING
    return (
        <button onClick={onClick} className={styling} {...otherProps}>{content}</button>
    );
}
