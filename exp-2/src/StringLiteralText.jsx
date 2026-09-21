import React from 'react';

function StringLiteralText() {
  const user = 'Bhavana';
  const role = 'Developer';
  const year = 2026;

  // Using template literals inside JSX curly braces
  return (
    <div>
      <h3>{`Hello ${user}, welcome to React!`}</h3>
      <p>{`Role: ${role} | Current Year: ${year}`}</p>
    </div>
  );
}

export default StringLiteralText;
