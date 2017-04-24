import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './ui/Header';

class Application extends Component {
  render() {
    return (
      <Header
        title="Hit Calculator"
      />
    );
  }
}

render(
  <Application />,
  document.getElementById('root')
)
