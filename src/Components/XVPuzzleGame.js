import React, {useEffect, useState} from 'react';
import GameField from "./GameField";
import Cell from "./Cell";


const CELL_SIZE = 2 // in em
const MARGIN_SIZE = 0.03 // in em
const FIELD_SIZE = 4 // in cells

// Edit text-[x] (font-size) property to change field scale
const DEFAULT_TEXT_SIZE = "text-[4em]"
const DEFAULT_FIELD_STYLING = "relative box-content border-black border-[0.1em] rounded-[0.5em] bg-gray-200 select-none";
const DEFAULT_CELL_STYLING = "cursor-pointer bg-gray-400 border-[0.1em] border-black rounded-[0.375em] transition-pos" +
    " outline-[1px] focus-visible:border-white";

const DEFAULT_STARTING_CELL_ORDER = [...Array(FIELD_SIZE*FIELD_SIZE)].map((e, i) => (i)).reverse()

function OrderFromPosition(position) {
    return position.y * FIELD_SIZE + position.x;
}

function OrderFromPositions(positions) {
    const order = Array(positions.length);
    positions.forEach((e,i) => {
        order[OrderFromPosition(e)] = i;
    })
    return order;
}

export default function XVPuzzleGame({startingCellOrder, setMovesCount, textSize, fieldStyling, cellStyling}) {
    startingCellOrder ??= DEFAULT_STARTING_CELL_ORDER
    
    const cellPositionFromOrder = (cellNumber) => {
        const cellIndex = startingCellOrder.indexOf(cellNumber)
        return ({x: cellIndex % FIELD_SIZE, y: ~~(cellIndex / FIELD_SIZE)})
    }
    
    const cellsPositionsFromStartingOrder = () => {
        return startingCellOrder.map((e, i) => cellPositionFromOrder(i))
    }
    
    
    const [cellsPositions, setCellsPositions] = useState([]);
    
    useEffect(() => {
            setCellsPositions(cellsPositionsFromStartingOrder())
    }, [startingCellOrder]);
    
    function isNearEmpty(cellNumber) {
        const emptyCellID = cellsPositions.length-1;
        
        const nearHorizontally = (Math.abs(cellsPositions[cellNumber].x - cellsPositions[emptyCellID].x) === 1 &&
                cellsPositions[cellNumber].y === cellsPositions[emptyCellID].y);
        const nearVertically = (Math.abs(cellsPositions[cellNumber].y - cellsPositions[emptyCellID].y) === 1 &&
            cellsPositions[cellNumber].x === cellsPositions[emptyCellID].x);
        
        return nearHorizontally || nearVertically;
    }
    
    const onCellClick = (cellNumber) => () => {
        const emptyCellID = cellsPositions.length-1;
        if (isNearEmpty(cellNumber)) {
            const newPositions = [...cellsPositions];
            [newPositions[cellNumber], newPositions[emptyCellID]] = [newPositions[emptyCellID], newPositions[cellNumber]]
            setCellsPositions(newPositions)
            setMovesCount(prevCount => prevCount + 1)
        }
    }
    
    const cellAsComponent =  (cellPosition, positionIndex) => {
        const nearEmpty = isNearEmpty(positionIndex);
        return (<Cell
        key={positionIndex}
        styling={cellProps.styling + (nearEmpty ? "" : " cursor-default")}
        pos={cellPosition}
        onClick={onCellClick(positionIndex)}
        content={positionIndex+1}
        size={cellProps.size}
        marginSize={cellProps.marginSize}
        tabIndex={nearEmpty ? OrderFromPosition(cellPosition) + 1 : -1}
    />)}
    
    const cellProps = {
        size: CELL_SIZE,
        marginSize: MARGIN_SIZE,
        styling: cellStyling ?? DEFAULT_CELL_STYLING,
        cellAsComponent
    }
    
    return (
        <GameField
            fieldSize={FIELD_SIZE}
            cellsPositions={cellsPositions}
            cellProps={cellProps}
            className={(textSize ?? DEFAULT_TEXT_SIZE) + ' ' + (fieldStyling ?? DEFAULT_FIELD_STYLING)
        }/>
    );
}
