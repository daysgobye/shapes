import React, { Component } from "react";
import shape from "../classes/shape";
class EditShape extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.amountToSpawnRef = React.createRef();
    this.scaleRef = React.createRef();
  }
  onUpdateScale = () => {
    this.props.updateShape(
      this.props.shape.upDateMinSize(this.scaleRef.current.value)
    );
  };
  onUpdateAmount = () => {
    this.props.updateShape(
      this.props.shape.upDateNum(this.amountToSpawnRef.current.value)
    );
  };
  render() {
    const { shape } = this.props;
    return (
      <div key={this.props.key}>
        {/* {shape.color} */}
        {/* {shape.image} */}
        <label>
          number to spawn:
          <input
            onChange={this.onUpdateAmount}
            ref={this.amountToSpawnRef}
            type="text"
            value={shape.numToRender}
          />
        </label>
        {/* <label>
          scale:
          <input
            ref={this.scaleRef}
            onChange={this.onUpdateScale}
            type="text"
            value={shape.minSize}
          />
        </label> */}
        <img src={shape.image} width={100} height={100} alt="" />
      </div>
    );
  }
}

export default EditShape;
