import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"],
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-primary btn-sm-2 m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm-2 m-2">
          Delete
        </button>
        {/* {this.props.counter.tags.length === 0 && <h2>Please create new tag</h2>} */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }

  //   handleIncrement = (e) => {
  //     this.setState({ value: this.props.counter.value + 1 });
  //   };
  getBadgeClasses() {
    let classes = "badge bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  //   renderTags() {
  //     if (this.props.counter.tags.length === 0) {
  //       return <p>There's no tags</p>;
  //     }
  //     return (
  //       <ul>
  //         {this.props.counter.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
}

export default Counter;
