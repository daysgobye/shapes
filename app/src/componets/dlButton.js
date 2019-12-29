import React, { Component } from "react";
import { Button } from "reactstrap";

class DlButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
    this.downloadURI(
      this.makeTextFile(JSON.stringify(this.props.savedRender)),
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
    const ctx = this.props.stageRef.current.children[1].getContext("2d");
    console.log(ctx);

    const dataURL = this.props.stageRef.current
      .getStage()
      .toDataURL({ pixelRatio: 3 });
    this.downloadURI(dataURL, "stage.png");
  };

  render() {
    return (
      <>
        <Button
          size="sm"
          className="m-1"
          color="primary"
          onClick={this.saveImage}
        >
          Save Image
        </Button>
        <Button
          size="sm"
          className="m-1"
          color="primary"
          onClick={this.saveFile}
        >
          Save set
        </Button>

        <div id="create"></div>
      </>
    );
  }
}

export default DlButton;
