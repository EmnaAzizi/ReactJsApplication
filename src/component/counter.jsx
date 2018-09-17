import React, { Component } from "react";

class Counter extends Component {
  state = {
    //    tags: []
  };

  // rendertags() {
  //   if (this.state.tags.length === 0) {
  //     return <p> there is no tags </p>;
  //   }
  //   return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.OnIncrement(this.props.counter)}
        >
          Increment
        </button>

        {/* {this.state.tags.length === 0 && "Please add a tag"}
        {this.rendertags()} */}
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.OnDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
