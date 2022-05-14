import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Matheus";
  const upperName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://assets.unileversolutions.com/recipes-v2/35824.jpg";

  return (
    <div className="App">
      <h1>Olá react</h1>
      <p>Primeiro programa</p>
      <p>Olá {name}</p>
      <p>Olá {upperName}</p>
      <h2>Soma: {sum(1, 2)}</h2>
      <img src={url} alt="Bolinho gostoso"></img>
    </div>
  );
}

export default App;
