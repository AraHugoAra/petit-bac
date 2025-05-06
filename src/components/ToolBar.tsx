import React from "react";

import { useLetter } from "../hooks/useLetter";
import { LETTERS } from "../constants";

interface ToolBarProps {
  setLetter: (letter: string) => void;
  pickCategories: () => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({
  setLetter,
  pickCategories,
}) => {
  const { pickRandomLetter, resetLetters, pickedLetters } = useLetter();

  const handlePickLetter = () => {
    if (pickedLetters.length === LETTERS.length) { // Check if all letters picked
      resetLetters();
      setLetter("");
      alert("Toutes les lettres ont été tirées.")
    } else {
        setLetter(pickRandomLetter());
    }
  };

  const handlePickCategories = () => {
    pickCategories();
  };

  return (
    <div id="toolbar">
      <p>Lettres tirées: {pickedLetters.join(", ")}</p>
      <div className="toolbar__buttons">
        <button onClick={handlePickLetter}>Choisir une lettre</button>
        <button
          onClick={() => {
            resetLetters();
            setLetter("");
          }}
        >
          Remise à zéro
        </button>
        <button onClick={handlePickCategories}>Choisir les catégories</button>
      </div>
    </div>
  );
};
