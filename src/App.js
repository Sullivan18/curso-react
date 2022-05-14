import "./App.css";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
      <h1>Olá react</h1>
      <Pessoa
        nome="Rodrigo"
        idade="23"
        profissao="programador"
        foto="https://extra.globo.com/incoming/25476737-77f-666/w488h275-PROP/img_1751.jpg"
      />
    </div>
  );
}

export default App;
