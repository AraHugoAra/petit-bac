import { useState } from "react";

import { ToolBar } from "./components/ToolBar";
import { GameInfo } from "./components/GameInfo";
import { useCategories } from "./hooks/useCategories";
import { PlayersInfo } from "./components/PlayersInfo";

import "./index.css";

function App() {
  const { pickedCategories, pickCategories } = useCategories();

  const [letter, setLetter] = useState<string | undefined>(undefined);

  return (
    <div className="app-container">
      <ToolBar setLetter={setLetter} pickCategories={pickCategories} />
      <GameInfo currentLetter={letter} pickedCategories={pickedCategories} />
      <PlayersInfo />
    </div>
  );
}

export default App;
