import axios from "axios";
import React, { useState } from "react";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [input, setInput] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=6`;
    let pexelsApiKey =
      "563492ad6f91700001000001ada7788a9a444ea5b9f44750b4dddff9";
    let header = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: header }).then(handlePhotoResponse);
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
        <Photos photos={photos} />
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
