import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [input, setInput] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${input} now`);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInput} />
      </form>
    </div>
  );
}
