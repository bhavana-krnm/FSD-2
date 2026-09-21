import React, { useState } from 'react';

function ButtonClick() {
  const [message, setMessage] = useState('Click the button!');

  const handleClick = () => {
    setMessage('Button was clicked!');
  };

  return (
    <div>
      <h3>{message}</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ButtonClick;
