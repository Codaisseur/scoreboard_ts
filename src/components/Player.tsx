// src/components/Player.tsx
import React from "react";

type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

export default function Player(props: Props) {
  return (
    <li className="Player">
      <p>
        {props.name} (score: {props.score}){" "}
        <button onClick={props.incrementScore}>increment</button>
      </p>
    </li>
  );
}