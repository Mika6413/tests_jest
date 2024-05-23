import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        setDisplay(eval(display));
      } catch (error) {
        console.error("Erreur dans l'évaluation", error);
        setDisplay("Erreur");
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="App">
      <h1>Calculatrice</h1>
      <div id="calculatrice">
        <input type="text" id="display" readOnly value={display} />
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
        {[...Array(4).keys()].map((op, index) => (
          <button
            key={index}
            onClick={() => handleClick(["+", "-", "*", "/"][index])}
          >
            {["+", "-", "*", "/"][index]}
          </button>
        ))}
        <button onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
}
