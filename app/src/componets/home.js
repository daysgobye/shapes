import React, { Component } from "react";
import { Grid, box } from "@material-ui/core";
import Canvas from "./canvas";
import Shapes from "./shapes";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: []
    };
  }
  addShape = shape => {
    const shapes = [shape, ...this.state.shapes];
    this.setState({ shapes });
  };
  updateShape = shape => {
    const shapes = this.state.shapes.map(s =>
      s.image === shape.image ? shape : s
    );
    this.setState({ shapes });
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <Canvas shapes={this.state.shapes}></Canvas>
        </div>
        <div style={{ display: "flex" }}>
          <Shapes
            shapes={this.state.shapes}
            addShape={this.addShape}
            updateShape={this.updateShape}
          ></Shapes>
        </div>
      </div>
    );
  }
}

export default Home;
