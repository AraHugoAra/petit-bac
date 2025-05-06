import React, { useState } from "react";

export const PlayerCard: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const [lockedPlayerName, setLockedPlayerName] = useState<string>("");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [displayedPlayerScore, setDisplayedPlayerScore] = useState<number>(0);

  // Adds the value from the input 'playerScore' to 'displayedPlayerScore'
  const handleScoreChange = (valueToAdd: number) =>
    setDisplayedPlayerScore((prev: number) => prev + valueToAdd);

  return (
    <div className="player-card">

      <form
        className="player-card-form name-form"
        onSubmit={(event) => {
          event.preventDefault();
          setLockedPlayerName(playerName.trim()); // Trim whitespace from name
        }}
        // Hide form when name is locked
        style={{ display: lockedPlayerName ? "none" : "flex" }} // Use display:flex to match form styling
      >
        <input
          className="player-card-input name-input"
          placeholder="Nom du Joueur"
          value={playerName}
          onChange={(event) => setPlayerName(event?.currentTarget.value)}
        />
        <button type="submit" className="player-card-button name-submit-button">
          OK
        </button>
      </form>

      {lockedPlayerName && (
         <div className="player-name">{lockedPlayerName}</div>
      )}

      <form
         className="player-card-form score-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleScoreChange(playerScore); // Add the input value to score
          setPlayerScore(0); // Reset the input field
        }}
      >
        <input
          className="player-card-input score-input"
          type="number"
          placeholder="Ajouter points"
          value={playerScore}
          onChange={(event) => {
            // Update input state, ensure it's a number (default to 0)
            setPlayerScore(Number(event.currentTarget.value) || 0);
          }}
        />
        <button
          type="submit"
          className="player-card-button score-submit-button"
        >
          Ajouter
        </button>
      </form>

      <div className="player-score">
        {displayedPlayerScore}
      </div>

    </div>
  );
};
