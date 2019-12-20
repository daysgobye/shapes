import React, { Component } from "react";
import Canvg from "canvg";
import logo from "./logo.svg";
import icon from "../ic.svg";
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import SvgRender from "./svgRender";
import { placement } from "../helpers.js/placement";
class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { shapes: [] };
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
        this.saveFile();
        this.saveImage();
      }
    );
  };

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
    var create = document.getElementById("create");
    create.addEventListener(
      "click",
      function() {
        var link = document.createElement("a");
        link.setAttribute("download", "shapes.txt");
        link.href = this.makeTextFile(JSON.stringify(this.state.shapes));
        document.body.appendChild(link);

        // wait for the link to be added to the document
        window.requestAnimationFrame(function() {
          var event = new MouseEvent("click");
          link.dispatchEvent(event);
          document.body.removeChild(link);
        });
      },
      false
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

  render() {
    return (
      <>
        <Stage
          ref={this.stageRef}
          width={window.innerWidth - 200}
          height={window.innerHeight}
        >
          <Layer>
            <Rect
              x={0}
              y={0}
              width={window.innerWidth - 200}
              height={window.innerHeight}
              fill="blue"
            />
          </Layer>
          <Layer>
            {this.state.shapes.map(shape => {
              return (
                <SvgRender
                  src={shape.image}
                  x={shape.pos.x}
                  y={shape.pos.y}
                  scale={shape.minSize}
                />
              );
            })}
            {/* <SvgRender src={icon} x={300} y={800} scale={8} /> */}
          </Layer>
        </Stage>
        <button onClick={this.posAllShapes}>mix</button>
        <div id="create"></div>
      </>
    );
  }
}

export default Canvas;
