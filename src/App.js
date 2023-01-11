import React from "react";
import "./App.css";
export default function App() {
  const [result, setResult] = React.useState("");
  function clickHandle(event) {
    setResult(result.concat(event.target.value));
  }
  function clearDisplay() {
    setResult("");
  }
  function calculate() {
    setResult(eval(result));
  }
  return (
    <div className="calc">
      <input type="text" placeholder="0" value={result} id="answer" />
      <input type="button" value="9" className="button" onClick={clickHandle} />
      <input type="button" value="8" className="button" onClick={clickHandle} />
      <input type="button" value="7" className="button" onClick={clickHandle} />
      <input type="button" value="6" className="button" onClick={clickHandle} />
      <input type="button" value="5" className="button" onClick={clickHandle} />
      <input type="button" value="4" className="button" onClick={clickHandle} />
      <input type="button" value="3" className="button" onClick={clickHandle} />
      <input type="button" value="2" className="button" onClick={clickHandle} />
      <input type="button" value="1" className="button" onClick={clickHandle} />
      <input type="button" value="0" className="button" onClick={clickHandle} />
      <input type="button" value="." className="button" onClick={clickHandle} />
      <input type="button" value="+" className="button" onClick={clickHandle} />
      <input type="button" value="-" className="button" onClick={clickHandle} />
      <input type="button" value="*" className="button" onClick={clickHandle} />
      <input type="button" value="/" className="button" onClick={clickHandle} />
      <input type="button" value="%" className="button" onClick={clickHandle} />
      <input
        type="button"
        value="DEL"
        className="button button1"
        onClick={clearDisplay}
      />
      <input
        type="button"
        value="="
        className="button button1"
        onClick={calculate}
      />
    </div>
  );
}
