export const placement = (shapes, width, height) => {
  return shapes.map(shape => {
    return {
      ...shape,
      pos: { x: randomInRange(1, width), y: randomInRange(1, height) }
    };
  });
};
export const placeInZone = cap => randomInRange(100, cap - 100);

export const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const placementInter = (cap, otherBodys) => {
  let newPos = {
    x: randomInRange(100, cap.innerWidth - 700),
    y: randomInRange(100, cap.innerHeight - 100)
  };

  for (let i = 0; i < otherBodys.flat().length; i++) {
    const pos = otherBodys.flat()[i];
    if (
      newPos.x > pos.pos.x &&
      newPos.x < pos.pos.x + 500 &&
      newPos.y > pos.pos.y &&
      newPos.y < pos.pos.y + 500
    ) {
      console.log("I got fucked");

      placementInter(cap, otherBodys);
    }
  }
  console.log(newPos.x);

  return newPos;
};
