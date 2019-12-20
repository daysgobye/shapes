class shape {
  constructor(image) {
    this.image = image;
    this.pos = { x: 1, y: 1 };
    this.color = "#fffff";
    this.minSize = 1;
    this.maxSize = 1;
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
}
export default shape;
