export const placement = (shapes, width, height) => {
  return shapes.map(shape => {
    return {
      ...shape,
      pos: { x: randomInRange(1, width), y: randomInRange(1, height) }
    };
  });
};

export const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
