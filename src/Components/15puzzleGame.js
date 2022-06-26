//DEPRECATED

import React, {useState} from 'react';
import Cell from "./Cell";
import GameField from "./GameField";

const CELL_SIZE = 2 //in em
const CELL_MARGIN_SIZE = 0.03 //in em
const FIELD_SIZE = 4 //in cells

// Edit text-[x] (font-size) property to change field scale
const DEFAULT_TEXT_SIZE = "text-[4em]"
const DEFAULT_FIELD_STYLING = "relative box-content border-black border-[0.1em] rounded-[0.5em] bg-gray-200";
const DEFAULT_CELL_STYLING = "cursor-pointer bg-gray-400 border-[0.1em] border-black rounded-[0.375em] transition-pos";

//let emptyCellPos = {x: 3, y: 3}

export default function XVPuzzleGame({textSize, fieldStyling, cellStyling})
{
    const [emptyCellPos, setEmptyCellPos] = useState({x: 3, y: 3});
    
    const [cells, setCells] = useState([...Array(15)].map((e, i) => ({number: i+1, pos: {x: i % 4, y: ~~(i / 4)}})));
    
    const cellProps = {
        size: CELL_SIZE,
        marginSize: CELL_MARGIN_SIZE,
        styling: cellStyling ?? DEFAULT_CELL_STYLING
    }
    
    const cellComponents = () => {
        return cells.map((e) =>
            (<Cell onClick={(event) => {
                        const nearEmpty = (Math.abs(e.pos.x - emptyCellPos.x) === 1 && e.pos.y === emptyCellPos.y) ||
                            (Math.abs(e.pos.y - emptyCellPos.y) === 1 && e.pos.x === emptyCellPos.x)
                        let newPos = e.pos
                        if (nearEmpty) {
                            newPos = emptyCellPos
                            setEmptyCellPos(e.pos)
                        }
                        setCells(prev => {
                            return prev.map((pe) => (pe.number === e.number ? {...pe, pos: newPos} : pe))
                        })
                        e = {...e, pos: newPos}
                    }
                } key={e.number} size={cellProps.size} marginSize={cellProps.marginSize} pos={e.pos} content={e.number} styling={cellProps.styling}
            />))
    }
    
    return (
        <GameField fieldSize={FIELD_SIZE} className={(textSize ?? DEFAULT_TEXT_SIZE) + ' ' + (fieldStyling ?? DEFAULT_FIELD_STYLING)}
                   cellComponents={cellComponents()} cellProps={cellProps} />

    );
}
