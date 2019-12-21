import React, { Component } from "react";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h5>some things are missing / not ready yet</h5>
        <p>
          color, random scale, overlap control's, phone support,
          <br /> locked down to just svgs(you can upload any image you want
          right now),
          <br /> replay from saved files, some svgs are broken, exporting svg
        </p>
        <p>so I hope what is done is still fun for you </p>
      </div>
    );
  }
}

export default Notes;
