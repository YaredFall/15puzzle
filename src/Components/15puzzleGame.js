import React from 'react';
import Cell from "./Cell";
import GameField from "./GameField";

const DEFAULT_FIELD_STYLING = "w-12 bg-gray-500 outline-1 outline-black";
const DEFAULT_CELL_STYLING = "w-10 bg-gray-500 outline-1 outline-black";

export default function XVPuzzleGame({fieldStyling, cellStyling})
{
    return (
        <GameField className={fieldStyling ?? DEFAULT_FIELD_STYLING}
                   cells={[...Array(16)].map((e, i) => <Cell key={i+1} className={cellStyling ?? DEFAULT_CELL_STYLING} />)} />

    );
}
