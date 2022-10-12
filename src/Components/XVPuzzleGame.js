import React, {useEffect, useState} from 'react';
import GameField from "./GameField";
import Cell from "./Cell";
import {IsSolved} from "../XVPuzzleGameStartingVartiantsGenerator";
import WinCongrats from "./WinCongrats";


const CELL_SIZE = 2 // in em
const MARGIN_SIZE = 0.03 // in em
const FIELD_SIZE = 4 // in cells

// Edit text-[x] (font-size) property to change field scale
const DEFAULT_TEXT_SIZE = "text-[4em]"
const DEFAULT_FIELD_STYLING = "relative box-content border-black border-[0.1em] rounded-[0.5em] bg-yellow-300 select-none overflow-hidden";
const DEFAULT_CELL_STYLING = "cursor-pointer bg-blue-200 border-[0.1em] border-black rounded-[0.375em] transition-pos" +
    " outline-[1px] focus-visible:border-white";

const DEFAULT_STARTING_CELL_ORDER = [...Array(FIELD_SIZE*FIELD_SIZE)].map((e, i) => (i)).reverse()

function OrderFromPosition(position) {
    return position.y * FIELD_SIZE + position.x;
}

// function OrderFromPositions(positions) {
//     const order = Array(positions.length);
//     positions.forEach((e,i) => {
//         order[OrderFromPosition(e)] = i;
//     })
//     return order;
// }

export default function XVPuzzleGame({startingCellOrder, setMovesCount, textSize, fieldStyling, cellStyling}) {
    startingCellOrder ??= DEFAULT_STARTING_CELL_ORDER

    const swapWithEmpty = (cellNumber) => {
        const emptyCellID = cellsPositions.length-1;
        const newPositions = [...cellsPositions];
        [newPositions[cellNumber], newPositions[emptyCellID]] = [newPositions[emptyCellID], newPositions[cellNumber]]
        setCellsPositions(newPositions)
    }

    const increaseMovesCount = () => {
        setMovesCount(prevCount => prevCount + 1);
    }

    const cellPositionFromOrder = (cellNumber) => {
        const cellIndex = startingCellOrder.indexOf(cellNumber)
        return ({x: cellIndex % FIELD_SIZE, y: ~~(cellIndex / FIELD_SIZE)})
    }
    
    const cellsPositionsFromStartingOrder = () => {
        return startingCellOrder.map((e, i) => cellPositionFromOrder(i))
    }

    const isNearEmpty = (cellNumber) => {
        const emptyCellID = cellsPositions.length-1;

        const nearHorizontally = (Math.abs(cellsPositions[cellNumber].x - cellsPositions[emptyCellID].x) === 1 &&
            cellsPositions[cellNumber].y === cellsPositions[emptyCellID].y);
        const nearVertically = (Math.abs(cellsPositions[cellNumber].y - cellsPositions[emptyCellID].y) === 1 &&
            cellsPositions[cellNumber].x === cellsPositions[emptyCellID].x);

        return nearHorizontally || nearVertically;
    }

    const onCellClick = (cellNumber) => () => {
<<<<<<< Updated upstream
            const emptyCellID = cellsPositions.length-1;
            const newPositions = [...cellsPositions];
            [newPositions[cellNumber], newPositions[emptyCellID]] = [newPositions[emptyCellID], newPositions[cellNumber]]
            setCellsPositions(newPositions)
            setMovesCount(prevCount => prevCount + 1)
=======
        if (isNearEmpty(cellNumber)) {
            swapWithEmpty(cellNumber);
            increaseMovesCount();
        }
>>>>>>> Stashed changes
    }

    const onArrowKeysInput = (e) => {
        console.log(cellsPositions)
        const emptyCellPos = cellsPositions.at(-1);
        switch (e.key) {
            case "ArrowUp":
                if (emptyCellPos.y < FIELD_SIZE - 1) // not in the last row
                {
                    swapWithEmpty(cellsPositions.findIndex(p => p.x === emptyCellPos.x && p.y === emptyCellPos.y + 1))
                    increaseMovesCount()
                }
                break;
            case "ArrowRight":
                if (emptyCellPos.x > 0) // not in the first column
                {
                    swapWithEmpty(cellsPositions.findIndex(p => p.x === emptyCellPos.x - 1 && p.y === emptyCellPos.y))
                    increaseMovesCount()
                }
                break;
            case "ArrowDown":
                if (emptyCellPos.y > 0) // not in the first row
                {
                    swapWithEmpty(cellsPositions.findIndex(p => p.x === emptyCellPos.x && p.y === emptyCellPos.y - 1))
                    increaseMovesCount()
                }
                break;
            case "ArrowLeft":
                if (emptyCellPos.x < FIELD_SIZE - 1) // not in the last column
                {
                    swapWithEmpty(cellsPositions.findIndex(p => p.x === emptyCellPos.x + 1 && p.y === emptyCellPos.y))
                    increaseMovesCount()
                }
                break;
            default: break;
        }
    }

    const [cellsPositions, setCellsPositions] = useState([]);

    useEffect(() => {
            setCellsPositions(cellsPositionsFromStartingOrder())
    }, [startingCellOrder]);

    useEffect(() => {
        document.addEventListener("keydown", onArrowKeysInput)
        return () => {
            document.removeEventListener("keydown", onArrowKeysInput)
        }
    }, [cellsPositions]);

    const cellAsComponent =  (cellPosition, positionIndex) => {
        const nearEmpty = isNearEmpty(positionIndex);
        return (<Cell
        key={positionIndex}
        styling={cellProps.styling + (nearEmpty ? "" : " cursor-default")}
        pos={cellPosition}
        onClick={nearEmpty ? onCellClick(positionIndex) : null}
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
<<<<<<< Updated upstream
    
    const cellsAsComponents = cellsPositions.slice(0, -1).map((e, i ) => cellProps.cellAsComponent(e,i))
    
    const gameFieldContent = IsSolved(OrderFromPositions(cellsPositions)) ?
        <WinCongrats>Congratulations!</WinCongrats> :
        cellsAsComponents;
    
=======

>>>>>>> Stashed changes
    return (
        <GameField
            fieldSize={FIELD_SIZE}
            cellSize={CELL_SIZE}
            marginSize={MARGIN_SIZE}
            children={gameFieldContent}
            cellProps={cellProps}
            className={(textSize ?? DEFAULT_TEXT_SIZE) + ' ' + (fieldStyling ?? DEFAULT_FIELD_STYLING)}
        />
    );
}
