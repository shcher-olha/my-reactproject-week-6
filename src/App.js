import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <h1 className='title'>React Weather-App</h1>
      <div className="container">
        <Weather defaultCity="New York" />
        <p>
          This project was coded by{" "}
          <a href="/" target="_blank" rel="noreferrer">
            Shcherbak Olha
          </a>{" "}
          and is{" "}
          <a href="/" target="_blank" rel="noreferrer">
            open sourced on Github
          </a>
        </p>
      </div>
    </div>
  );
}

 
