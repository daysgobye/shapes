export const placement = (shapes, width, height) => {
  return shapes.map(shape => {
    return {
      ...shape,
      pos: { x: randomInRange(1, width), y: randomInRange(1, height) }
    };
  });
};
export const placeInZone = cap => randomInRange(10, cap - 100);

export const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const placementInter = (cap, otherBodys, count = 1) => {
  let newPos = {
    x: randomInRange(100, cap.innerWidth - 700),
    y: randomInRange(100, cap.innerHeight - 100)
  };

  for (let i = 0; i < otherBodys.flat().length; i++) {
    const pos = otherBodys.flat()[i];
    if (
      newPos.x > pos.pos.x &&
      newPos.x < pos.pos.x + 120 &&
      newPos.y > pos.pos.y &&
      newPos.y < pos.pos.y + 120
    ) {
      console.log("I got fucked");
      if (count < 10) {
        placementInter(cap, otherBodys, count + 1);
      } else {
        console.log("offset");

        newPos = {
          x: -100,
          y: -100
        };
      }
    }
  }
  console.log(newPos.x);

  return newPos;
};
