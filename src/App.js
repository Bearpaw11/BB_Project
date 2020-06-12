import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
          { name: "Max", age: 28},
          { name: "Chris", age: 30},
          { name: "Fred", age: 35}
        ],
        otherState: 'someothervalue'
      }
    
    
  
    switchNameHandler = (newName) => {
       this.setState({
         persons: [
         {name: newName, age: 8},
         {name: "Frank", age: 3},
         {name: "Tom", age: 5}
        ]
      });
   };

   nameChangedHandler =(event) => {
     this.setState( {
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
     ]
    })
   }

   render () {
     const style = {
       backgroundColor: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
     };

   return ( 
      <div className ="App">
        <h1>Hi, Welcome to react</h1>
        <p>My Name is Chris</p>
        <button
        style={style}
        onClick={() => this.switchNameHandler('Theodore')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "yolo")}
        changed = {this.nameChangedHandler}> My Hobbies: Poker </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;


