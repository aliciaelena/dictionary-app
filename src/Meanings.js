import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <span className="header">{props.meanings.partOfSpeech}</span>

      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Synonyms synonyms={definition.synonyms} />
            {definition.definition}
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
