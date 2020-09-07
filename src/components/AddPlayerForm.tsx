// src/components/AddPlayerForm.tsx
import React, { useState } from "react";

export default function AddPlayerForm() {
  const [name, setName] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={event => {
            console.log("new input .value:", event.target.value);
            setName(event.target.value);
          }}
        />{" "}
        <button>Add</button>
      </p>
    </div>
  );
}
