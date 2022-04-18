import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Dictionary</h1>
        <Dictionary defaultKeyword="sunshine" />
      </div>
    </div>
  );
}
