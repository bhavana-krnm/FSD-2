import React, { useState } from "react";

function MultipleUseState() {

  const [count, setCount] = useState(0);

  const [name, setName] = useState("Bhavana");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    setName("Karanam Bhavana");
  };

  const Login = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>React useState Hook for Counter Button</h2>

      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>

      <hr />

      <h3>Name: {name}</h3>
      <button onClick={changeName}>Change Name</button>

      <hr />

      <h3>
        Status: {isLoggedIn ? "Logged In" : "Logged Out"}
      </h3>
      <button onClick={Login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default MultipleUseState;