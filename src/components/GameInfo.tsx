import React from "react";

interface GameInfoProps {
  currentLetter?: string;
  pickedCategories: string[];
}

export const GameInfo: React.FC<GameInfoProps> = ({
  currentLetter,
  pickedCategories,
}) => {
  return (
    <div className="game-info-display">
      {currentLetter ? (
        <div className="current-letter-display">{currentLetter}</div>
      ) : (
        <div className="current-letter-display">-</div>
      )}
      <ul className="categories-list">
        {pickedCategories.map((category) => (
          <li key={category} className="category-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
