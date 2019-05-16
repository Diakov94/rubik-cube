import { Object3D } from 'three';
import TWEEN from '@tweenjs/tween.js';
import piece from './piece';
import { SIZE_OF_PIECE } from './constants/pieceGeometry';
import cube3x3 from './constants/cube3x3';
import getSide from './utils/getSide';
import {
  FRONT, BACK, TOP, BOTTOM, LEFT, RIGHT,
} from './constants/sideTypes';

const SIZE_OF_PIECE_WITH_GAPS = SIZE_OF_PIECE * 1.01;
const arr = [FRONT, BACK, TOP, BOTTOM, LEFT, RIGHT];
function randomSide() {
  return arr[Math.floor(Math.random() * 6)];
}

class Cube {
  constructor() {
    this.container = new Object3D();
    this.cube = new Object3D();
    this.container.add(this.cube);
    this.pieces = new Array(26);
    cube3x3.colors.forEach((colors, index) => {
      const elem = piece(colors);
      this.pieces[index] = elem;
      this.cube.add(elem);
      const [x, y, z] = cube3x3.relativePosition[index];
      elem.position.set(
        SIZE_OF_PIECE_WITH_GAPS * x,
        SIZE_OF_PIECE_WITH_GAPS * y,
        SIZE_OF_PIECE_WITH_GAPS * z,
      );
    });
    this[FRONT] = getSide(FRONT, this.pieces);
    this[BACK] = getSide(BACK, this.pieces);
    this[TOP] = getSide(TOP, this.pieces);
    this[BOTTOM] = getSide(BOTTOM, this.pieces);
    this[LEFT] = getSide(LEFT, this.pieces);
    this[RIGHT] = getSide(RIGHT, this.pieces);
    const tween = new TWEEN.Tween({ alpha: 0 });
    this.currentSide = FRONT;
    tween.onStart(() => {
      this.currentSide = randomSide();
      this.rnd = ['x', 'y', 'z'][Math.floor(Math.random() * 3)];
      this.rndDir = [1 / 2, 2, 1, -1 / 2, -2, -1][Math.floor(Math.random() * 3)];
      this.prevPos = this.cube.rotation[this.rnd];
    });
    tween.to({ alpha: 1 });
    tween.onUpdate(({ alpha }) => {
      this.cube.rotation[this.rnd] = this.prevPos + (Math.PI * this.rndDir * alpha);
    });
    tween.onComplete((rate) => {
      // eslint-disable-next-line no-param-reassign
      rate.alpha = 0;
    });
    setInterval(() => {
      tween.start();
    }, 1500);
  }

  // update = () => {
  //   console.log(1);
  // };
}

export default new Cube();
