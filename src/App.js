import "./App.css";
import HelloWorld from "./components/HelloWord";

function App() {
  const name = "André";
  const upperName = name.toUpperCase();

  return (
    <div className="App">
      <h1>Olá react</h1>
      <p>Primeiro programa</p>
      <p>Olá {name}</p>
      <p>Olá {upperName}</p>

      <HelloWorld />
    </div>
  );
}

export default App;
