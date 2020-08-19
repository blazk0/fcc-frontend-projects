import React from 'react';

type Props = {
  title: string;
  id: string;
  downId: string;
  upId: string;
  value: number;
  valueId: string;
  handleChange: (arg: number) => void;
  handleTimer: (arg: any) => void;
};

const Length = ({
  title,
  id,
  downId,
  upId,
  value,
  valueId,
  handleChange,
  handleTimer,
}: Props) => {
  const handleDecrement = () => {
    if (value !== 1) {
      handleChange(value - 1);

      if (id === 'session-label') {
        handleTimer((timer: any) => timer - 60);
      }
    }
  };

  const handleIncrement = () => {
    if (value < 60) {
      handleChange(value + 1);

      if (id === 'session-label') {
        handleTimer((timer: any) => timer + 60);
      }
    }
  };

  return (
    <div id={id}>
      <h1>{title}</h1>
      <div className="ln-container">
        <button id={downId} onClick={handleDecrement}>
          <i className="fa fa-arrow-down fa-2x" />
        </button>

        <h3 id={valueId}>{value}</h3>

        <button id={upId} onClick={handleIncrement}>
          <i className="fa fa-arrow-up fa-2x" />
        </button>
      </div>
    </div>
  );
};

export default Length;
