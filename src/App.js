import './App.css';
import XVPuzzleGame from "./Components/XVPuzzleGame";
import {useState} from "react";

function App() {
 
    const [movesCount, setMovesCount] = useState(0);
    
    return (
    <div className="bg-gray-200 h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col">
            <h1 className="self-end mr-[1.5em]">{'Moves count: ' + movesCount}</h1>
            <XVPuzzleGame setMovesCount={setMovesCount}/>
        </div>
    </div>
    );
}

export default App;
