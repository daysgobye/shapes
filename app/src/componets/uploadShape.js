import React, { Component } from "react";
import Shape from "../classes/shape";
class UploadShape extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fileRef = React.createRef();
  }
  makeShape = e => {
    // console.log(shape, "file", e.target.files[0]);
    const shape = new Shape(URL.createObjectURL(e.target.files[0]));
    console.log(shape, "file", e);

    this.props.addShape(shape);
  };
  render() {
    return (
      <div>
        <input type="file" name="" id="" onChange={e => this.makeShape(e)} />
        <button onClick={this.makeShape}>go </button>
      </div>
    );
  }
}

export default UploadShape;
