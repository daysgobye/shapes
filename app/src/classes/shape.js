class shape {
  constructor(image, imgName) {
    this.image = image;
    this.imageName = imgName;
    this.pos = { x: 1, y: 1 };
    this.color = "#fffff";
    this.minSize = 1;
    this.maxSize = 1;
    this.numToRender = 1;
  }
  toObj = () => {
    return {
      image: this.image,
      pos: this.pos,
      color: this.color,
      minSize: this.minSize,
      maxSize: this.maxSize
    };
  };
  setPos = pos => {
    this.pos = pos;
  };
  upDateNum = num => {
    this.numToRender = num;
    return this;
  };
  upDateMinSize = num => {
    this.minSize = num;
    return this;
  };
}
export default shape;
