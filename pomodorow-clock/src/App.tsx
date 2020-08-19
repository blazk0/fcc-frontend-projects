import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Length from './components/Length';

function App() {
  const [breakTime, setBreakTime] = useState<number>(5);
  const [session, setSession] = useState<number>(25);
  const [timer, setTimer] = useState<number>(1500);
  const [interval, setIntervalID] = useState<number>();
  const [label, setLabel] = useState<string>('Session');
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (timer === 0) {
      audioRef.current?.play();
      stopCountdown();

      if (label === 'Session') {
        setLabel('Break');
        setTimer(breakTime * 60);
        setBreakTime(breakTime => breakTime - 1);
      } else {
        setLabel('Session');
        setTimer(1500);
      }

      startCountdown();
    }

    // eslint-disable-next-line
  }, [timer]);

  const startCountdown = () => {
    const intervalID: any = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);

    setIntervalID(intervalID);
  };

  const stopCountdown = () => {
    clearInterval(interval);
    setIntervalID(undefined);
  };

  const handleReset = () => {
    stopCountdown();
    setBreakTime(5);
    setSession(25);
    setTimer(1500);
    audioRef.current?.pause();

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const showClock = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = Math.floor(timer - minutes * 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="container">
      <h1 className="title">Pomodorow Clock</h1>

      <div className="flex">
        <Length
          title="Break Length"
          id="break-label"
          downId="break-decrement"
          upId="break-increment"
          valueId="break-length"
          value={breakTime}
          handleChange={setBreakTime}
          handleTimer={setTimer}
        />

        <Length
          title="Session Length"
          id="session-label"
          downId="session-decrement"
          upId="session-increment"
          valueId="session-length"
          value={session}
          handleChange={setSession}
          handleTimer={setTimer}
        />
      </div>

      <div className="timer">
        <h3 id="timer-label">{label}</h3>

        <h1 id="time-left">{showClock()}</h1>
      </div>

      <div className="timer-control">
        <button
          id="start_stop"
          onClick={interval ? stopCountdown : startCountdown}
        >
          <i className="fa fa-play fa-2x" />
          <i className="fa fa-pause fa-2x" />
        </button>

        <button id="reset" onClick={handleReset}>
          <i className="fa fa-refresh fa-2x" />
        </button>
      </div>

      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ref={audioRef}
      ></audio>
    </div>
  );
}

export default App;
