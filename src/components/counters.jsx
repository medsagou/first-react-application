import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // selected={true}
            counter={counter}>
            <h1>Counter #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
