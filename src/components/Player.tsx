// src/components/Player.tsx
import React from "react";

type Props = {
  name: string;
  score: number;
};

export default function Player(props: Props) {
  return (
    <li className="Player">
      <p>{props.name} (score: {props.score})</p>
    </li>
  );
}
