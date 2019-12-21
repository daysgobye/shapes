import React, { Component } from "react";
import UploadShape from "./uploadShape";
import EditShape from "./editShape";
import Notes from "./notes";
class Shapes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.shapes.map((shape, i) => (
          <EditShape
            updateShape={this.props.updateShape}
            shape={shape}
            key={i}
          ></EditShape>
        ))}
        <UploadShape addShape={this.props.addShape}></UploadShape>
        <Notes></Notes>
      </div>
    );
  }
}

export default Shapes;
