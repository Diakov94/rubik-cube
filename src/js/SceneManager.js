import TWEEN from '@tweenjs/tween.js';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PointLight,
  Color,
  AmbientLight,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function SceneManager(root) {
  const renderer = buildRenderer();
  const scene = buildScene();
  const camera = buildCamera();
  const controls = buildControls();
  window.scene = scene;
  window.controls = controls;
  buildLights();
  this.add = (obj) => {
    scene.add(obj);
    return this;
  };
  this.onWindowResize = () => {
    const { offsetWidth, offsetHeight } = root;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(offsetWidth, offsetHeight);
  };
  this.update = () => {
    TWEEN.update();
    controls.update();
    renderer.render(scene, camera);
  };
  function buildRenderer() {
    const webglRenderer = new WebGLRenderer({ antialias: true });
    webglRenderer.setPixelRatio(window.devicePixelRatio);
    webglRenderer.setSize(root.offsetWidth, root.offsetHeight);
    root.appendChild(webglRenderer.domElement);
    return webglRenderer;
  }
  function buildScene() {
    const theScene = new Scene();
    theScene.background = new Color(0xffffff);
    return theScene;
  }
  function buildCamera() {
    const perspectiveCamera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );
    perspectiveCamera.position.set(250, 400, 250);
    return perspectiveCamera;
  }
  function buildControls() {
    return new OrbitControls(camera);
  }

  function buildLights() {
    buildPointLight().position.set(2500, 1500, 2500);
    buildPointLight().position.set(2500, 1500, -2500);
    buildPointLight().position.set(-2500, 1500, 2500);
    buildPointLight().position.set(-2500, 1500, -2500);
    scene.add(new AmbientLight(0xF7F7F7, 0.5));

    function buildPointLight() {
      const light = new PointLight(0xF7F7F7, 0.4);
      scene.add(light);
      return light;
    }
  }
}
