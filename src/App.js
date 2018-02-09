import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Connections from './Connections/Connections';
import {getFriends} from './Data/db';
//import friends from './Data/db';
//import Button from './UI/Button';


class App extends Component {
  state = {
    friends: getFriends(),
}
  render() {
    return (
      <div className='app'>
        <NavBar searchText='find something' />
        <Connections friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
