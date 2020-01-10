import React from 'react';
import { init, createGeometryText } from './utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ADD: 0.06,
      renderer: null,
      scene: null,
      camera: null,
      text: null
    };
  }

  componentDidMount = () => {
    const text = createGeometryText();
    const start = init(text);
    const { viewer } = this.refs;
    viewer.appendChild(start.renderer.domElement);
    const { renderer, scene, camera } = start;
    this.setState({
      renderer,
      scene,
      camera,
      text
    });
    this.mainLoop();
  };

  mainLoop = () => {
    const { ADD, text, scene, camera, renderer } = this.state;
    if (scene !== null && text !== null && camera !== null && renderer !== null) {
      text.position.z -= ADD;
      text.position.y += ADD / 2;
      renderer.render(scene, camera);
    }
    requestAnimationFrame(this.mainLoop);
  };

  body = () => <div id="viewer"></div>;

  render() {
    return this.body();
  }
}

export default App;
