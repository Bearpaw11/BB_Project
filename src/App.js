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
        otherState: 'someothervalue',
        showPersons: false
      }
    
    
  
    

   nameChangedHandler =(event) => {
     this.setState( {
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
     ]
    })
   }

   deletePersonHandler = (personIndex) => {
    //  const persons = this.state.persons.slice();
     const persons =[...this.state.persons];
     persons.splice(personIndex, 1);
     this.setState({persons: persons})
   }

   togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
   }

   render () {
     const style = {
       backgroundColor: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
     };

     let persons = null;

     if(this.state.showPersons) {
       persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}/>
          })}
          </div> 
       );
     }
     
   return ( 
      <div className ="App">
        <h1>Hi, Welcome to react</h1>
        <p>My Name is Chris</p>
        <button
            style={style}
            onClick={this.togglePersonHandler}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;


