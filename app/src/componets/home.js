import React, { Component } from "react";
import { Grid, box } from "@material-ui/core";
import Canvas from "./canvas";
import Shapes from "./shapes";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: [],
      isOpen: false
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
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <Canvas shapes={this.state.shapes}></Canvas>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Button className="m-1" size="sm" onClick={this.toggle}>
              add A Shape
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add More Shapes</ModalHeader>
          <ModalBody>
            <Shapes
              shapes={this.state.shapes}
              addShape={this.addShape}
              updateShape={this.updateShape}
            ></Shapes>
          </ModalBody>
          <ModalFooter>
            <Button className="m-1" color="primary" onClick={this.toggle}>
              Done
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Home;
