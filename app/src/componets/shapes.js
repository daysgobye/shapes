import React, { Component } from "react";
import UploadShape from "./uploadShape";
class Shapes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.shapes.map((shape, i) => (
          <div key={i}>
            {shape.color}
            {shape.image}
            <img src={shape.image} width={100} height={100} alt="" />
          </div>
        ))}
        <UploadShape addShape={this.props.addShape}></UploadShape>
      </div>
    );
  }
}

export default Shapes;
