/* eslint-disable no-param-reassign */
import getSide from '../utils/getSide';
import {
  FRONT, BACK, TOP, BOTTOM, LEFT, RIGHT,
} from './sideTypes';

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
getSide(FRONT, cube3x3.colors).forEach(colors => colors[0] = 'white');

// [1] BACK
getSide(BACK, cube3x3.colors).forEach(colors => colors[1] = 'orange');

// [2] TOP
getSide(TOP, cube3x3.colors).forEach(colors => colors[2] = 'yellow');

// [3] BOTTOM
getSide(BOTTOM, cube3x3.colors).forEach(colors => colors[3] = 'blue');

// [4] LEFT
getSide(LEFT, cube3x3.colors).forEach(colors => colors[4] = 'red');

// [5] RIGHT
getSide(RIGHT, cube3x3.colors).forEach(colors => colors[5] = 'green');

// ## POSITION

// [0] FRONT
getSide(FRONT, cube3x3.relativePosition).forEach(position => position[0] = 1);

// -[0] BACK
getSide(BACK, cube3x3.relativePosition).forEach(position => position[0] = -1);

// [1] TOP
getSide(TOP, cube3x3.relativePosition).forEach(position => position[1] = 1);

// -[1] BOTTOM
getSide(BOTTOM, cube3x3.relativePosition).forEach(position => position[1] = -1);

// [2] LEFT
getSide(LEFT, cube3x3.relativePosition).forEach(position => position[2] = 1);

// -[2] RIGHT
getSide(RIGHT, cube3x3.relativePosition).forEach(position => position[2] = -1);

export default cube3x3;
