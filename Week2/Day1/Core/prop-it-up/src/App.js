import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        lastName={"Doe"}
        firstName={"Jane"}
        age={45}
        hair={"Black"}
      />
      <Card
        lastName={"Smith"}
        firstName={"John"}
        age={88}
        hair={"Brown"}
      />
      <Card lastName={"Fillmore"}
      firstName={"Millard"}
      age={50}
      hair={"Brown"}
      />
      <Card
        lastName={"Smith"}
        firstName={"Maria"}
        age={62}
        hair={"Brown"}
      />
    </div>
  );
}

export default App;