import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
