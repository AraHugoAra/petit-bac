import { useState } from "react";
import { LETTERS } from "../constants";

export const useLetter = () => {
  const [pickedLetters, setPickedLetters] = useState<string[]>([]);

  const resetLetters = () => {
    setPickedLetters([]);
  };

  const pickRandomLetter = () => {
    let randomLetter: string;
    let availableLetters = LETTERS.filter(letter => !pickedLetters.includes(letter));

    if (availableLetters.length === 0) {
      resetLetters();
      availableLetters = LETTERS;
    }

    do {
      const randomIndex = Math.floor(Math.random() * availableLetters.length);
      randomLetter = availableLetters[randomIndex];
    } while (pickedLetters.includes(randomLetter));

    setPickedLetters((prev) => [...prev, randomLetter]);
    return randomLetter;
  };

  return {
    pickedLetters,
    pickRandomLetter,
    resetLetters,
  };
};
