import {
  FRONT, BACK, TOP, BOTTOM, LEFT, RIGHT,
} from '../constants/sideTypes';

// eslint-disable-next-line consistent-return
export default function (side, array) {
  // eslint-disable-next-line default-case
  switch (side) {
    case FRONT:
      return array.slice(0, 9);
    case BACK:
      return array.slice(17);
    case TOP:
      return [
        ...array.slice(0, 3),
        ...array.slice(9, 12),
        ...array.slice(17, 20),
      ];
    case BOTTOM:
      return [
        ...array.slice(6, 9),
        ...array.slice(14, 17),
        ...array.slice(23, 26),
      ];
    case LEFT:
      return [
        array[0],
        array[3],
        array[6],
        array[9],
        array[12],
        array[14],
        array[17],
        array[20],
        array[23],
      ];
    case RIGHT:
      return [
        array[2],
        array[5],
        array[8],
        array[11],
        array[13],
        array[16],
        array[19],
        array[22],
        array[25],
      ];
  }
}
