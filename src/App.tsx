import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './Components/CardList/CardList';
import { SearchBox } from './Components/SearchBox/SearchBox';

interface appState {
  monsters: any[]
  searchFilter: string
}

class App extends Component<{},appState> {

  constructor() {
    super({});
    this.state = {
      monsters: [],
      searchFilter: ""
    }

    this.searchFilterHandler = this.searchFilterHandler.bind(this)
  }

  searchFilterHandler(searchFilter: string) {
    this.setState({ searchFilter })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response: any) => response.json())
    .then((users: any) => this.setState({monsters: users}))
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((element: any) => {
      return element.name.toLocaleLowerCase().includes(this.state.searchFilter)
    })
    return (
      <>
      <div className='object-fill bg-gradient-to-r from-green-500 to-indigo-500'>
        <div className='container max-w-full'>
          <div>
            <SearchBox setSearchFilter={this.searchFilterHandler}></SearchBox>
            <CardList monsters={filteredMonsters}></CardList>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default App;
