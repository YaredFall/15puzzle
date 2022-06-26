import React from 'react';

export default function GameField({fieldSize, styling, cellsPositions, cellProps, ...otherProps}) {
    const fieldDynamicStyles ={
        height: `${fieldSize * cellProps.size + (fieldSize + 1) * cellProps.marginSize}em`,
        width:  `${fieldSize * cellProps.size + (fieldSize + 1) * cellProps.marginSize}em`,
    }
    
    const cellsAsComponents = cellsPositions.slice(0, -1).map((e, i ) => cellProps.cellAsComponent(e,i))

    return (
        <div id="game-field" style={fieldDynamicStyles} className={ styling } {...otherProps}>
            {cellsAsComponents}
        </div>
    );
}
