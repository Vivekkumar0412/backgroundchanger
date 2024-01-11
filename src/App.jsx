import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");
  return (
    <>
      <div className="main-div" style={{ backgroundColor: color }}>
        <div className="btn-div">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
            className="btn"
          >
            RED
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="btn"
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className="btn"
          >
            GREEN
          </button>
          <button
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
            className="btn"
          >
            ORANGE
          </button>
          <button
            onClick={() => setColor("cyan")}
            style={{ backgroundColor: "cyan" }}
            className="btn"
          >
            CYAN
          </button>
          <button
            onClick={() => setColor("grey")}
            style={{ backgroundColor: "grey" }}
            className="btn"
          >
            GREY
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
