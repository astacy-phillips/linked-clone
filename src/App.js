import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Connections from './Connections/Connections';
import {getConnections} from './dummy-data';
//import friends from './Data/db';
//import Button from './UI/Button';


class App extends Component {
  state = {
    connections: getConnections(),
}
  render() {
    return (
      <div className='app'>
        <NavBar searchText='find something' />
        <Connections connections={this.state.connections}/>
      </div>
    );
  }
}

export default App;
