import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <br />
        <button className="btn" onClick={this.props.OnReset}>
          Reset
        </button>
        <br /> <br />
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            OnDelete={this.props.OnDelete}
            OnIncrement={this.props.OnIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
