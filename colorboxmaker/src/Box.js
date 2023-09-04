import React from 'react';

function Box({ backgroundColor, width, height, index, removeBox }) {
  const boxStyle = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className="Box" style={boxStyle}>
      <button onClick={() => removeBox(index)}>X</button>
    </div>
  );
}

export default Box;
