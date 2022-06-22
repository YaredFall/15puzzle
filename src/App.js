import './App.css';
import Cell from "./Components/Cell";
import GameField from "./Components/GameField";
import XVPuzzleGame from "./Components/15puzzleGame";

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <XVPuzzleGame />
    </div>
  );
}

export default App;
