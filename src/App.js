import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {
  const [personsState, setPersonsState] = useState ({
    persons: [
          { name: "Max", age: 28},
          { name: "Chris", age: 30},
          { name: "Fred", age: 35}
        ]
      });
    
  const [otherState, setOtherState] = useState('Some Other Value');
    
  console.log(personsState);
    const switchNameHandler = () => {
       setPersonsState({
         persons: [
         {name: "Ted", age: 8},
         {name: "Frank", age: 3},
         {name: "Tom", age: 5}
        ]
      });
   };

  return ( 
      <div className ="App">
        <h1>Hi, Welcome to react</h1>
        <p>My Name is Chris</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
  }


export default App;


