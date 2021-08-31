import React, { Component } from 'react';
import { render } from 'react-dom';

import getImage from './getImage';

class App extends Component {
  constructor() {
    super();
    this.images = [
      { name: 'band' },
      { name: 'all-games', extras: { state: true } },
      { name: 'all-games' },
      { name: 'my-games' },
      { name: 'my-games', extras: { state: true } },
      { name: 'circle' }
    ];
  }
  render() {
    return <div>{this.images.map(img => getImage(img.name, img.extras))}</div>;
  }
}

render(<App />, document.getElementById('root'));
