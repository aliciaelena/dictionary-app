import axios from "axios";
import React, { useState } from "react";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInput} />
      </form>
      <Results results={result} />
    </div>
  );
}
