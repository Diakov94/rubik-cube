import SceneManager from './SceneManager';
import Cube from './cube';

export default function main(root = document.getElementById('app')) {
  const manager = new SceneManager(root);
  manager.update();
  window.addEventListener('resize', manager.onWindowResize);
  animate();
  manager.add(Cube.container);
  function animate() {
    manager.update();
    requestAnimationFrame(animate);
  }
}
