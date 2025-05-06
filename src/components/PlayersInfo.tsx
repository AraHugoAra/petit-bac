import React, { useState } from "react";
import { PlayerCard } from "./PlayerCard";

export const PlayersInfo: React.FC = () => {
  const [currentPlayers, setCurrentPlayers] = useState<number[]>([0, 1]);

  const handleAddPlayer = () => {
    // Add a new player identifier (using length as simple ID here)
    setCurrentPlayers((prev) => [...prev, prev.length]);
  };

  const handleDeletePlayer = () => {
    // Prevent deleting the last player if desired
    if (currentPlayers.length <= 1) {
      alert("Au moins un joueur est requis.");
      return;
    }
    // Remove the last player from the array
    const modifiedCurrentPlayers = currentPlayers.slice(0, -1);
    setCurrentPlayers(modifiedCurrentPlayers);
  };

  return (
    <div id="players-info">

      <div className="player-controls">
        <button onClick={handleAddPlayer}>Ajouter joueur</button>
        <button onClick={handleDeletePlayer}>Supprimer dernier joueur</button>
      </div>

      <div className="player-cards-container">
        {currentPlayers.map((playerIndex) => (
          <PlayerCard key={playerIndex} />
        ))}
      </div>

    </div>
  );
};
