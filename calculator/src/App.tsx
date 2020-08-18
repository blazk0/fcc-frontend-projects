import React, { useState, MouseEvent } from 'react';
import './App.scss';

function App() {
  const [display, setDisplay] = useState<string>('0');

  const handleChange = (e: MouseEvent<HTMLButtonElement>): void => {
    const val = e.currentTarget.value;

    if (display === '0') {
      setDisplay(val);
    } else if (val === '.') {
      handleDecimals(val);
    } else if (val.match(/[+*/-]/)) {
      handleOperators(val);
    } else {
      setDisplay(`${display}${val}`);
    }
  };

  const handleDecimals = (val: string) => {
    const stringArr = display.split('');

    if (
      stringArr[stringArr.length - 1] === '.' ||
      stringArr[stringArr.length - 2] === '.'
    ) {
      return;
    } else {
      setDisplay(`${display}${val}`);
    }
  };

  const handleOperators = (val: string) => {
    let inc = display.length > 0 && display.split('');

    if (inc && inc[inc.length - 1].match(/[+*/-]/)) {
      inc[inc.length - 1] = val;

      setDisplay(inc.join(''));
    } else {
      setDisplay(`${display}${val}`);
    }
  };

  const calculate = () => {
    // eslint-disable-next-line
    setDisplay(eval(display));
  };

  return (
    <div id="calculator">
      <h1 id="display">{display}</h1>

      <button className="jumbo ac" id="clear" onClick={() => setDisplay('0')}>
        AC
      </button>
      <button className="operator" id="divide" value="/" onClick={handleChange}>
        /
      </button>
      <button
        className="operator"
        id="multiply"
        value="*"
        onClick={handleChange}
      >
        x
      </button>

      <button id="seven" value="7" onClick={handleChange}>
        7
      </button>
      <button id="eight" value="8" onClick={handleChange}>
        8
      </button>
      <button id="nine" value="9" onClick={handleChange}>
        9
      </button>
      <button
        className="operator"
        id="subtract"
        value="-"
        onClick={handleChange}
      >
        -
      </button>

      <button id="four" value="4" onClick={handleChange}>
        4
      </button>
      <button id="five" value="5" onClick={handleChange}>
        5
      </button>
      <button id="six" value="6" onClick={handleChange}>
        6
      </button>
      <button className="operator" id="add" value="+" onClick={handleChange}>
        +
      </button>

      <button id="one" value="1" onClick={handleChange}>
        1
      </button>
      <button id="two" value="2" onClick={handleChange}>
        2
      </button>
      <button id="three" value="3" onClick={handleChange}>
        3
      </button>

      <button className="jumbo" id="zero" value="0" onClick={handleChange}>
        0
      </button>
      <button id="decimal" value="." onClick={handleChange}>
        .
      </button>

      <button id="equals" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default App;
