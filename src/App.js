import logo from './ads.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá! Meu nome é Letícia e eu sou professora de ADS.
        </p>
        Esse é meu primeiro comit GitHub.
        <a
          className="App-link"
          href="instagram.com/adsunifasipe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Análise e Desenvolvimento de sistemas - Unifasipe.
        </a>
      </header>
    </div>
  );
}

export default App;
