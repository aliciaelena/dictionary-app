import axios from "axios";
import React, { useState } from "react";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [input, setInput] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word..."
            onChange={handleInput}
          />
          <button type="submit">Go!</button>
        </form>
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
