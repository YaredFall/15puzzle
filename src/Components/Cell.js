import React, {useEffect, useRef} from 'react';

const CONSTANT_STYLING = "flex absolute aspect-square m-0 justify-center items-center box-border";
const CHANGEABLE_STYLING = "h-[4em] bg-gray-500 outline outline-1 outline-black focus:outline-accent"

export default function Cell({ size, marginSize, pos, content, styling, ...otherProps }) {

    function cellDynamicStyles(){
        return  {
            height: `${size}em`,
            left: pos.x * size + (pos.x + 1) * marginSize + 'em',
            top:  pos.y * size + (pos.y + 1) * marginSize + 'em'
        }
    }

    const cellRef = useRef();

    const {tabIndex} = {...otherProps}
    useEffect(() => {
        if (tabIndex < 0)
            cellRef.current.blur();
    })
    
    return (
        <button ref={cellRef} className={CONSTANT_STYLING + " " + styling ?? CHANGEABLE_STYLING} style={cellDynamicStyles()} {...otherProps} >
            {content}
        </button>
        
        
    );
}
