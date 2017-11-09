import React, { Component } from 'react';
import Header from './Header';
import Profolio from './profolio';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Profolio />
      </div>
    ); 
  }
}

export default App;
