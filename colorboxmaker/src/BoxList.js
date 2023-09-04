import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  // add a new box to the list
  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  // remove a specific box by index
  const removeBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  };

  return (
    <div>
      <h1>Color Box Maker</h1>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box
          key={index}
          index={index}
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
}

export default BoxList;
