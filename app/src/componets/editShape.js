import React, { Component } from "react";
import { Container, Row, Col, Input } from "reactstrap";
import shape from "../classes/shape";
class EditShape extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.amountToSpawnRef = React.createRef();
    this.scaleRef = React.createRef();
  }
  onUpdateScale = () => {
    console.log(this.scaleRef.current.value);

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
      <Container key={this.props.key}>
        {/* {shape.color} */}
        {/* {shape.image} */}
        <Row>
          <Col xs="2">
            <img src={shape.image} width={50} height={50} alt="" />
          </Col>
          <Col xs="5">
            <label>
              number to spawn:
              <input
                type="number"
                name="number"
                className="form-control"
                onChange={this.onUpdateAmount}
                ref={this.amountToSpawnRef}
                value={shape.numToRender}
              />
            </label>
          </Col>
          <Col xs="5">
            <label>
              scale:
              <input
                type="number"
                name="number"
                className="form-control"
                ref={this.scaleRef}
                onChange={this.onUpdateScale}
                value={shape.minSize}
              />
            </label>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditShape;
