import React, { useState } from 'react';
function Color() {
  const [selectedColor, setSelectedColor] = useState();
  const colorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <center>
      <div>
        <h1>Color Picker</h1>
        <select onChange={colorChange}>
          <option>White</option>
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>orange</option>
          <option>black</option>
        </select>
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: selectedColor,
            marginTop: '20px',
            // border: '2px solid black',
          }}
        ></div>
      </div>
    </center>
  );
}
export default Color;