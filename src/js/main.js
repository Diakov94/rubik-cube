import SceneManager from './SceneManager';

export default function main(root = document.getElementById('app')) {
  const manager = new SceneManager(root);
  manager.update();
  window.addEventListener('resize', manager.onWindowResize);
  animate();
  function animate() {
    manager.update();
    requestAnimationFrame(animate);
  }
}
