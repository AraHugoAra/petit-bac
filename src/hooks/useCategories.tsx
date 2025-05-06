import { useState } from "react";
import { CATEGORIES } from "../constants";

export const useCategories = () => {
  const [pickedCategories, setPickedCategories] = useState<string[]>([]);

  const pickCategories = () => {
    const shuffledCategories = [...CATEGORIES].sort(() => 0.5 - Math.random());
    const selectedCategories = shuffledCategories.slice(0, 8);
    setPickedCategories(selectedCategories);
    return selectedCategories;
  };

  return {
    pickedCategories,
    pickCategories,
  };
};
