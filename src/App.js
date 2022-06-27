import './App.css';
import XVPuzzleGame from "./Components/XVPuzzleGame";
import {useState} from "react";
import {GenerateSolvablePermutation} from "./XVPuzzleGameStartingVartiantsGenerator";

const LAST_CELLS_ORDER_KEY = 'lastCellsOrder';

let randomCellsOrder = [];

function LoadLastOrder() {
    const lastOrder = localStorage.getItem(LAST_CELLS_ORDER_KEY);
    if (lastOrder) {
        randomCellsOrder = JSON.parse(lastOrder)
    }
    else {
        GenerateSolvablePermutation(4).then((permutation) => randomCellsOrder = permutation)
        SaveOrder(randomCellsOrder)
    }
}

function SaveOrder(order) {
    localStorage.setItem(LAST_CELLS_ORDER_KEY, JSON.stringify(order))
}

LoadLastOrder();

function App() {
    
    const regenerateCellsOrder = () => {
        GenerateSolvablePermutation(4).then((permutation) => {
            setStartingCellsOrder(permutation)
            SaveOrder(permutation)
        })
        setMovesCount(0);
    }
    
    const restoreCellsOrder = () => {
        setStartingCellsOrder([...startingCellsOrder])
        SaveOrder(startingCellsOrder)
        setMovesCount(0);
    }
    
    const [startingCellsOrder, setStartingCellsOrder] = useState(randomCellsOrder);
    const [movesCount, setMovesCount] = useState(0);
    
    return (
    <div className="bg-gray-200 h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col">
            <h1 className="self-end text-4xl m-[1rem]">{'Moves: ' + movesCount}</h1>
            <XVPuzzleGame startingCellOrder={startingCellsOrder} setMovesCount={setMovesCount}/>
            <div className="flex flex-row justify-between">
                <button onClick={regenerateCellsOrder} className="text-4xl m-[1rem] flex-1 bg-gray-400 border-black border-2 px-4 rounded-xl">New Game</button>
                <button onClick={restoreCellsOrder} className="text-4xl m-[1rem] flex-1 bg-gray-400 border-black border-2 px-4 rounded-xl">Restart</button>
            </div>
        </div>
    </div>
    );
}

export default App;
