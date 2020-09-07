// src/components/AddPlayerForm.tsx
import React, { useState } from "react";

type Props = {
  addPlayer: (name: string) => void;
};

export default function AddPlayerForm(props: Props) {
  const [name, setName] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            console.log("new input .value:", event.target.value);
            setName(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
            setName("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
