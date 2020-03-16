import React, {Component} from 'react';
import {CardList} from './components/card-list/card.component';
import './App.css';
import './components/search_bar/search_bar.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
    monsters: [],
    searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  render(){
    
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <input type='search' className="search" placeholder='Search the monster' onChange={e => this.setState ({searchField: e.target.value})}/>
         
         <CardList monsters = {filterMonsters}>
        

           </CardList>
        
      </div>
    );
  

  }

}


  

export default App;
