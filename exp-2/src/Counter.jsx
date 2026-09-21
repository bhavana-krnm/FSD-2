import React from "react";
import "./counter1.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCounter(type) {
    if (type === "add") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    } else {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  }

  render() {
    return (
      <div className="counterLayout">
        <h2 className="heading">Counter - Class Program</h2>

        <p>Counter Value : {this.state.count}</p>

        <div className="buttonLayout">
          <button
            className="button green"
            onClick={() => this.updateCounter("add")}
          >
            Add Counter
          </button>

          <button
            className="button red"
            onClick={() => this.updateCounter("minus")}
          >
            Minus Counter
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;