import { Mesh } from 'three';
import pieceGeometry from './constants/pieceGeometry';
import {
  WHITE_MATERIAL,
  ORANGE_MATERIAL,
  GREEN_MATERIAL,
  RED_MATERIAL,
  YELLOW_MATERIAL,
  BLUE_MATERIAL,
  BLACK_MATERIAL,
} from './constants/materials';

function mapColor(color) {
  switch (color) {
    case 'white':
      return WHITE_MATERIAL;
    case 'orange':
      return ORANGE_MATERIAL;
    case 'green':
      return GREEN_MATERIAL;
    case 'red':
      return RED_MATERIAL;
    case 'yellow':
      return YELLOW_MATERIAL;
    case 'blue':
      return BLUE_MATERIAL;
    default:
      return BLACK_MATERIAL;
  }
}

export default function piece(arrayOfColors) {
  return new Mesh(pieceGeometry, arrayOfColors.map(mapColor));
}
