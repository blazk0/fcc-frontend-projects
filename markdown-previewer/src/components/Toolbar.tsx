import React from 'react';

interface Props {
  title: string;
}

const Toolbar = ({ title }: Props) => {
  return (
    <div className="toolbar">
      <i className="fab fa-free-code-camp" />

      <h3>{title}</h3>
    </div>
  );
};

export default Toolbar;
