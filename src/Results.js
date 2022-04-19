import React from "react";
import Meanings from "./Meanings.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetic} />
            </div>
          );
        })}
        <section>
          {props.results.meanings.map(function (meanings, indexTwo) {
            return (
              <div key={indexTwo}>
                <Meanings meanings={meanings} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
