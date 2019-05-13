import SceneManager from './SceneManager';
// import Cube from './cube';
import piece from './piece';

export default function main(root = document.getElementById('app')) {
  const manager = new SceneManager(root);
  manager.update();
  window.addEventListener('resize', manager.onWindowResize);
  animate();
  const arr = new Array(6).fill(null);
  arr[0] = 'white'; // front
  arr[1] = 'orange'; // back
  arr[2] = 'yellow'; // up
  arr[3] = 'blue'; // down
  arr[4] = 'red'; // left
  arr[5] = 'green'; // right
  manager.add(piece(arr));
  function animate() {
    manager.update();
    requestAnimationFrame(animate);
  }
}
