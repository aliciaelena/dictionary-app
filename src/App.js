import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Dictionary</h1>
        <Dictionary defaultKeyword="sunshine" />
        <footer>
          <a
            href="https://github.com/aliciaelena/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/alicia-nagele-789b5561"
            target="_blank"
            rel="noreferrer"
          >
            Alicia Nagele
          </a>
        </footer>
      </div>
    </div>
  );
}
