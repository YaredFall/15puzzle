import React from 'react';
import Cell from "./Cell";

export default function GameField({cells, ...otherProps}) {
    return (
        <div id="game-field" className="grid grid-cols-4 w-fit border-black border-solid border-2">
            {cells}
        </div>
    );
}
