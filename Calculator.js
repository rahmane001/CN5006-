import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

// Optional: If you want to use a math library (e.g., math.js), install it using:
// npm install mathjs
import { evaluate } from 'mathjs';  // Using math.js to evaluate expressions

function KeyPadComponent() {
  const [text1, setText] = useState("");  // State for calculator input
  const [showImage, setShowImage] = useState(false);  // State for image visibility

  // Handle button clicks
  const ClickHandle = (e) => {
    if (e.target.value === "C") {
      setText("");  // Clear the input field
    } else if (e.target.value === "=") {
      try {
        const result = evaluate(text1);  // Evaluate the expression safely using math.js
        setText(result.toString());  // Show the result
        alert(result);  // Optionally alert the result
      } catch (error) {
        setText("Error");  // Handle invalid expressions
      }
    } else {
      setText(text1 + e.target.value);  // Append button value to the input
    }
  };

  // Handle square operation
  const handleSquare = () => {
    setText(Math.pow(Number(text1), 2));  // Square the number entered
  };

  // Toggle image visibility
  const showImageHandler = () => {
    setShowImage(!showImage);  // Toggle image visibility
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>
      <div className="keypad">
        <div>
          <Button label="C" ClickHandle={ClickHandle} />
          <Button label="CE" ClickHandle={ClickHandle} />
          <Button label="(" ClickHandle={ClickHandle} />
          <Button label=")" ClickHandle={ClickHandle} />
        </div>
        <div>
          <Button label="1" ClickHandle={ClickHandle} />
          <Button label="2" ClickHandle={ClickHandle} />
          <Button label="3" ClickHandle={ClickHandle} />
          <Button label="+" ClickHandle={ClickHandle} />
        </div>
        <div>
          <Button label="4" ClickHandle={ClickHandle} />
          <Button label="5" ClickHandle={ClickHandle} />
          <Button label="6" ClickHandle={ClickHandle} />
          <Button label="-" ClickHandle={ClickHandle} />
        </div>
        <div>
          <Button label="7" ClickHandle={ClickHandle} />
          <Button label="8" ClickHandle={ClickHandle} />
          <Button label="9" ClickHandle={ClickHandle} />
          <Button label="*" ClickHandle={ClickHandle} />
        </div>
        <div>
          <Button label="0" ClickHandle={ClickHandle} />
          <Button label="." ClickHandle={ClickHandle} />
          <Button label="=" ClickHandle={ClickHandle} />
          <Button label="/" ClickHandle={ClickHandle} />
        </div>
        <div>
          <Button label="Show Me" ClickHandle={showImageHandler} />
          <Button label="Square" ClickHandle={handleSquare} />
        </div>
      </div>
      {showImage && <img src="/IMG_1814.PNG" alt="User" />}  {/* Show image when toggled */}
    </div>
  );
}

export default KeyPadComponent;
