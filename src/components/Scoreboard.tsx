// src/components/Scoreboard.tsx
import React, { useState } from "react";

import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

type PlayerObj = {
  id: number;
  name: string;
  score: number;
};

function compareByScore(playerA: PlayerObj, playerB: PlayerObj) {
  return playerB.score - playerA.score;
}

function compareByName(playerA: PlayerObj, playerB: PlayerObj) {
  return playerA.name.localeCompare(playerB.name);
}

export default function Scoreboard() {
  const [sortBy, setSortBy] = useState("score"); // either "score" or "name"

  const [players, setPlayers] = useState<PlayerObj[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  // Defining the callback function:
  const incrementScore = (/* possibly some params here */) => {
    // something smart here
    console.log("todo: increment score");
  };

  const playersSorted =
    // first "copy" the array
    [...players]
    // then sort it with the `compareByScore` callback function
    .sort(sortBy === "name" ? compareByName : compareByScore);

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select
          onChange={event => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>Player's scores:</p>
      <ul>
        {playersSorted.map(player => {
          return (
            <Player
              key={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
