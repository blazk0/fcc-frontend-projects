import React, { useEffect, useState } from 'react';
import './App.scss';
import DrumPad from './components/DrumPad';
import data from './utils';

function App() {
  const [key, setKey] = useState<number>();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    document.addEventListener('keydown', e => setKey(e.keyCode));
    document.addEventListener('keyup', () => setKey(0));

    return () => {
      document.removeEventListener('keydown', () => {});
      document.addEventListener('keyup', () => {});
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">
        {data.map(drum => (
          <DrumPad
            drum={drum}
            key={drum.id}
            keyCode={key}
            changeText={setTitle}
          />
        ))}
      </div>

      <h1>{title}</h1>
    </div>
  );
}

export default App;
