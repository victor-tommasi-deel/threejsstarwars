import {
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer,
  AxesHelper,
  MeshBasicMaterial,
  Mesh,
  FontLoader,
  TextGeometry
} from 'three';
import fontJSON from '../fonts.json';

const createGeometryText = () => {
  const loader = new FontLoader();
  const font = loader.parse(fontJSON);
  const titles =
    'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nsed do eiusmod tempor incididunt\n ut labore et dolore magna aliqua.\nUt enim ad minim veniam,\nquis nostrud exercitation ullamco laboris\n nisi ut aliquip ex ea commodo consequat.';

  const geometry = new TextGeometry(titles, { font: font, size: 3, height: 0.1 });

  const material = new MeshBasicMaterial({ colorL: 0xffffff });
  const text = new Mesh(geometry, material);

  text.position.x = -25;
  text.rotation.x = -0.9;

  return text;
};

const addAxis = (scene) => {
  scene.add(new AxesHelper(5));
};

const init = (text) => {
  const { innerWidth, innerHeight } = window;
  const scene = new Scene();
  scene.background = new Color(0x000000);
  const camera = new PerspectiveCamera(70, innerWidth / innerHeight, 1, 150);
  camera.position.set(0, 5, 40);
  scene.add(text);
  const renderer = new WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight);
  return {
    renderer,
    scene,
    camera
  };
};

export { init, createGeometryText, addAxis };
