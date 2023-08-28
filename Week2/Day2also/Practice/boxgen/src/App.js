import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';


function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])

  return (
    <div className="App">
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />


      
    </div>
  );
}

export default App;