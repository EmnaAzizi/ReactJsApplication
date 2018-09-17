import React, { Component } from "react";

import "./App.css";
import Navbar from "./component/navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters]; //clone
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.filter(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("this is the counter", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  count() {
    let a = 0;
    for (var i = 0; i < this.state.counters.length; i++) {
      a = a + this.state.counters[i].value;
    }

    return a;
  }
  render() {
    return (
      <React.Fragment>
        <Navbar totalCount={this.count()} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            OnReset={this.handleReset}
            OnDelete={this.handleDelete}
            OnIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
