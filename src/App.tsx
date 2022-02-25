import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './Components/CardList/CardList';

interface appState {
  monsters: any[]
}

class App extends Component<{},appState> {

  constructor() {
    super({});
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response: any) => response.json())
    .then((users: any) => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="bg-gradient-to-r from-green-500 to-indigo-500">
        <div className='container mx-auto'>
          <CardList monsters={this.state.monsters}></CardList>
        </div>
     </div>
     
    );
  }
}

export default App;
