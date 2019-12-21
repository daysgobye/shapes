import React, { Component } from "react";
import Canvg from "canvg";
import logo from "./logo.svg";
import icon from "../ic.svg";
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import SvgRender from "./svgRender";
import { placement, placeInZone } from "../helpers.js/placement";
class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { shapes: [], sideBar: 600 };
    this.stageRef = React.createRef();
  }
  posAllShapes = () => {
    this.setState(
      {
        shapes: placement(
          this.props.shapes,
          window.innerWidth,
          window.innerHeight
        )
      },
      () => {
        // this.saveFile();
        // this.saveImage();
      }
    );
  };
  savedRender = [];
  textFile = null;

  makeTextFile = text => {
    var data = new Blob([text], { type: "text/plain" });

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (this.textFile !== null) {
      window.URL.revokeObjectURL(this.textFile);
    }

    this.textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return this.textFile;
  };

  saveFile = () => {
    // var create = document.getElementById("create");
    // create.addEventListener(
    //   "click",
    //   function() {
    //     var link = document.createElement("a");
    //     link.setAttribute("download", "shapes.txt");
    //     link.href = this.makeTextFile(JSON.stringify(this.state.shapes));
    //     document.body.appendChild(link);

    //     // wait for the link to be added to the document
    //     window.requestAnimationFrame(function() {
    //       var event = new MouseEvent("click");
    //       link.dispatchEvent(event);
    //       document.body.removeChild(link);
    //     });
    //   },
    //   false
    // );
    this.downloadURI(
      this.makeTextFile(JSON.stringify(this.savedRender)),
      "shapes.json"
    );
  };
  downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  saveImage = () => {
    const dataURL = this.stageRef.current
      .getStage()
      .toDataURL({ pixelRatio: 3 });
    this.downloadURI(dataURL, "stage.png");
  };

  renderArrayOfShapes = shape => {
    let array = [];
    let loopShape = [];
    for (let i = 0; i < shape.numToRender; i++) {
      let x = placeInZone(window.innerWidth - this.state.sideBar);
      let y = placeInZone(window.innerHeight);
      array.push(
        <SvgRender src={shape.image} x={x} y={y} scale={shape.minSize} />
      );
      loopShape.push({ ...shape, pos: { x, y } });
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
          <button onClick={this.posAllShapes}>mix</button>
          <button onClick={this.saveImage}>Save Image</button>
          <button onClick={this.saveFile}>Save set</button>
        </div>

        <div id="create"></div>
      </>
    );
  }
}

export default Canvas;
