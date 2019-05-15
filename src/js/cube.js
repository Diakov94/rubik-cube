import { Object3D } from 'three';
import piece from './piece';
import { SIZE_OF_PIECE } from './constants/pieceGeometry';
import cube3x3 from './constants/cube3x3';

const SIZE_OF_PIECE_WITH_GAPS = SIZE_OF_PIECE * 1.01;

class Cube {
  constructor() {
    this.container = new Object3D();
    this.cube = new Object3D();
    this.container.add(this.cube);
    cube3x3.colors.forEach((colors, index) => {
      const elem = piece(colors);
      this.cube.add(elem);
      const [x, y, z] = cube3x3.relativePosition[index];
      elem.position.set(
        SIZE_OF_PIECE_WITH_GAPS * x,
        SIZE_OF_PIECE_WITH_GAPS * y,
        SIZE_OF_PIECE_WITH_GAPS * z,
      );
    });
  }
}

export default new Cube();
