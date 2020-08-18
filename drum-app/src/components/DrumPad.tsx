import React, { useRef, useEffect } from 'react';
import { Drum } from '../@types';

interface Props {
  drum: Drum;
  keyCode: number | undefined;
  changeText: (title: string) => void;
}

const DrumPad = ({ drum, keyCode, changeText }: Props) => {
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (keyCode === drum.keyCode) {
      audio.current?.play();
      changeText(drum.id);
    }
  }, [keyCode]);

  return (
    <div
      className={`drum-pad ${keyCode === drum.keyCode && 'active'}`}
      id={drum.id}
      onClick={() => audio.current?.play()}
    >
      <audio id={drum.text} src={drum.sound} className="clip" ref={audio} />
      {drum.text}
    </div>
  );
};

export default DrumPad;
