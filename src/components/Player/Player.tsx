// src/components/Player.tsx
import React from "react";
import "./Player.scss";

type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

export default function Player(props: Props) {
  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} (score: {props.score}){" "}
        <button onClick={props.incrementScore}>increment</button>
      </p>
    </li>
  );
}
