import React from 'react';

export default function GameField({cellComponents, cellProps, fieldSize, styling, ...otherProps}) {
    const fieldDynamicStyles ={
        height: `${fieldSize * cellProps.size + (fieldSize + 1) * cellProps.marginSize}em`,
        width:  `${fieldSize * cellProps.size + (fieldSize + 1) * cellProps.marginSize}em`
    }
    
    return (
        <div id="game-field" style={fieldDynamicStyles} className={ styling } {...otherProps}>
            {cellComponents}
        </div>
    );
}
