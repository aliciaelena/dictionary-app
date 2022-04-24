import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>{props.meanings.partOfSpeech}</h3>

        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <span className="definition">{definition.definition}</span>
              <br />
              <span className="example">{definition.example}</span>
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <br />
            </div>
          );
        })}
      </section>
    </div>
  );
}
