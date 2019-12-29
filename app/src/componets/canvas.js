import React, { Component } from "react";
import { Button } from "reactstrap";
import Canvg from "canvg";
// import logo from "./logo.svg";
// import icon from "../ic.svg";
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import SvgRender from "./svgRender";
import DlButton from "./dlButton";
import {
  placement,
  placeInZone,
  placementInter,
  checkOverLap
} from "../helpers.js/placement";
class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { shapes: [], sideBar: 210 };
    this.stageRef = React.createRef();
  }
  posAllShapes = () => {
    this.savedRender = [];
    this.setState({
      shapes: this.props.shapes
    });
  };
  savedRender = [];
  renderArrayOfShapes = shape => {
    let array = [];
    let loopShape = [];
    let count = 0;
    console.log(shape, "I need this shape flag");

    while (loopShape.length < shape.numToRender && count < 1000) {
      let x = placeInZone(window.innerWidth - this.state.sideBar, shape);
      let y = placeInZone(window.innerHeight, shape);
      let noIn = true;
      const overlap = 100 * shape.scale;
      // let pos=placementInter( window,[...this.savedRender,...loopShape] )
      let otherBodys = [...loopShape, ...this.savedRender];
      for (let i = 0; i < otherBodys.flat().length; i++) {
        const pos = otherBodys.flat()[i];
        if (pos.pos && checkOverLap(y, x, pos, shape)) {
          console.log("overlap");
          noIn = false;
          count++;
        }
      }
      if (noIn) {
        array.push(
          <SvgRender
            key={`img${array.length * y * x}`}
            src={shape.image}
            x={x}
            y={y}
            scale={shape.minSize}
          />
        );
        loopShape.push({ ...shape, pos: { x, y } });
      }
    }
    this.savedRender.push(loopShape);
    return array;
  };

  shapeRender = () => {
    const render = this.state.shapes.map(shape => {
      return this.renderArrayOfShapes(shape);
    });
    // this.savedRender = render;
    return render;
  };

  render() {
    return (
      <>
        <Stage
          ref={this.stageRef}
          width={window.innerWidth - this.state.sideBar}
          height={window.innerHeight}
        >
          <Layer>
            <Rect
              x={0}
              y={0}
              width={window.innerWidth - this.state.sideBar}
              height={window.innerHeight}
              fill="white"
            />
          </Layer>
          <Layer>
            {this.shapeRender()}
            {/* <SvgRender src={icon} x={300} y={800} scale={8} /> */}
          </Layer>
        </Stage>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DlButton
            stageRef={this.stageRef}
            savedRender={this.savedRender}
          ></DlButton>
          <Button
            color="danger"
            className="m-1"
            size="sm"
            onClick={this.posAllShapes}
          >
            mix
          </Button>
        </div>
      </>
    );
  }
}

export default Canvas;
