/* eslint-disable no-param-reassign */
const cube3x3 = {
  colors: new Array(26)
    .fill(null)
    .map(() => new Array(6).fill('')), // item is an array of color strings
  relativePosition: new Array(26)
    .fill(null)
    .map(() => new Array(3).fill(0)), // item is an array of [X, Y, Z]
};

// ## COLORS

// [0] FRONT
cube3x3.colors.slice(0, 9).forEach(colors => colors[0] = 'white');

// [1] BACK
cube3x3.colors.slice(17).forEach(colors => colors[1] = 'orange');

// [2] TOP
[
  ...cube3x3.colors.slice(0, 3),
  ...cube3x3.colors.slice(9, 12),
  ...cube3x3.colors.slice(17, 20),
].forEach(colors => colors[2] = 'yellow');

// [3] BOTTOM
[
  ...cube3x3.colors.slice(6, 9),
  ...cube3x3.colors.slice(14, 17),
  ...cube3x3.colors.slice(23, 26),
].forEach(colors => colors[3] = 'blue');

// [4] LEFT
[
  cube3x3.colors[0],
  cube3x3.colors[3],
  cube3x3.colors[6],
  cube3x3.colors[9],
  cube3x3.colors[12],
  cube3x3.colors[14],
  cube3x3.colors[17],
  cube3x3.colors[20],
  cube3x3.colors[23],
].forEach(colors => colors[4] = 'red');

// [5] RIGHT
[
  cube3x3.colors[2],
  cube3x3.colors[5],
  cube3x3.colors[8],
  cube3x3.colors[11],
  cube3x3.colors[13],
  cube3x3.colors[16],
  cube3x3.colors[19],
  cube3x3.colors[22],
  cube3x3.colors[25],
].forEach(colors => colors[5] = 'green');

// ## POSITION

// [0] FRONT
cube3x3.relativePosition.slice(0, 9).forEach(position => position[0] = 1);

// -[0] BACK
cube3x3.relativePosition.slice(17).forEach(position => position[0] = -1);

// [1] TOP
[
  ...cube3x3.relativePosition.slice(0, 3),
  ...cube3x3.relativePosition.slice(9, 12),
  ...cube3x3.relativePosition.slice(17, 20),
].forEach(position => position[1] = 1);

// -[1] BOTTOM
[
  ...cube3x3.relativePosition.slice(6, 9),
  ...cube3x3.relativePosition.slice(14, 17),
  ...cube3x3.relativePosition.slice(23, 26),
].forEach(position => position[1] = -1);

// [2] LEFT
[
  cube3x3.relativePosition[0],
  cube3x3.relativePosition[3],
  cube3x3.relativePosition[6],
  cube3x3.relativePosition[9],
  cube3x3.relativePosition[12],
  cube3x3.relativePosition[14],
  cube3x3.relativePosition[17],
  cube3x3.relativePosition[20],
  cube3x3.relativePosition[23],
].forEach(position => position[2] = 1);

// -[2] RIGHT
[
  cube3x3.relativePosition[2],
  cube3x3.relativePosition[5],
  cube3x3.relativePosition[8],
  cube3x3.relativePosition[11],
  cube3x3.relativePosition[13],
  cube3x3.relativePosition[16],
  cube3x3.relativePosition[19],
  cube3x3.relativePosition[22],
  cube3x3.relativePosition[25],
].forEach(position => position[2] = -1);

export default cube3x3;
