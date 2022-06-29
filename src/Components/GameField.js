import React from 'react';

export default function GameField({fieldSize, cellSize, marginSize, styling, children, ...otherProps}) {
    const fieldDynamicStyles ={
        height: `${fieldSize * cellSize + (fieldSize + 1) * marginSize}em`,
        width:  `${fieldSize * cellSize + (fieldSize + 1) * marginSize}em`,
    }

    return (
        <div id="game-field" style={fieldDynamicStyles} className={styling} {...otherProps}>
            {children}
        </div>
    );
}
