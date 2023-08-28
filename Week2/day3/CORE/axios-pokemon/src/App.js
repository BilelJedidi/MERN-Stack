import './App.css';
import React, { useState, useEffect} from "react"
import axios from "axios"

function App() {
  const [apiData, setApiData] = useState([])
  useEffect(()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((res) => {
      console.log(res.data.results)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
      <h1>Hello Pokemons</h1>
      <ul>{apiData.map((pokeName, i)=>(
        <li>{pokeName.name}</li>
      ))}</ul>
    </div>
  );
}

export default App;
