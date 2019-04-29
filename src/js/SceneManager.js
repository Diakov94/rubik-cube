import TWEEN from '@tweenjs/tween.js';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PointLight,
  Color,
  Mesh,
  MeshLambertMaterial,
  PlaneGeometry,
  BoxGeometry,
  MeshPhongMaterial,
  BasicShadowMap,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function SceneManager(root) {
  const renderer = buildRenderer();
  const scene = buildScene();
  const camera = buildCamera();
  const controls = buildControls();
  window.scene = scene;
  buildFloor();
  buildLights();
  const box = new Mesh(new BoxGeometry(90, 90, 90), new MeshPhongMaterial({ color: 0xff0000 }));
  scene.add(box);
  box.castShadow = true;
  box.position.setY(180);
  this.add = (obj) => {
    scene.add(obj);
    return this;
  };
  this.onWindowResize = () => {
    const { offsetWidth: width, offsetHeight: height } = root;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  this.update = () => {
    TWEEN.update();
    controls.update();
    renderer.render(scene, camera);
  };
  function buildRenderer() {
    const webglRenderer = new WebGLRenderer({ antialias: true });
    webglRenderer.shadowMap.enabled = true;
    webglRenderer.shadowMap.type = BasicShadowMap;
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
      root.offsetWidth / root.offsetHeight,
      0.1,
      20000,
    );
    perspectiveCamera.position.set(250, 400, 250);
    return perspectiveCamera;
  }
  function buildControls() {
    const theControls = new OrbitControls(camera);
    theControls.maxPolarAngle = Math.PI / 2.1;
    return theControls;
  }
  function buildLights() { // TODO: ВКЛЮЧИТЬ ТЕНИ
    const lights = new Array(5);
    lights[0] = new PointLight(0xF9FA57);
    scene.add(lights[0]);
    lights[0].castShadow = true;
    lights[0].position.set(2500, 2500, 2500);

    lights[1] = new PointLight(0xF9FA57);
    scene.add(lights[1]);
    lights[1].castShadow = true;
    lights[1].position.set(2500, 2500, -2500);

    lights[2] = new PointLight(0xF9FA57);
    scene.add(lights[2]);
    lights[2].castShadow = true;
    lights[2].position.set(-2500, 2500, 2500);

    lights[3] = new PointLight(0xF9FA57);
    scene.add(lights[3]);
    lights[3].castShadow = true;
    lights[3].position.set(-2500, 2500, -2500);

    lights[4] = new PointLight(0xF9FA57);
    scene.add(lights[4]);
    lights[4].castShadow = true;
    lights[4].position.set(0, 2500, 0);
  }
  function buildFloor() { // TODO: ДОБАВИТЬ ТЕНИ
    const plane = new Mesh(
      new PlaneGeometry(25000, 25000, 64, 64),
      new MeshLambertMaterial({ color: 0x696969 }),
    );
    plane.material.wireframe = true;
    plane.receiveShadow = true;
    plane.rotateX(-Math.PI / 2);
    scene.add(plane);
  }
}
