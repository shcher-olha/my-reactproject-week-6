import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <h1 className="title">React Weather-App</h1>
      <div className="container">
        <Weather defaultCity="Vaduz" />
        <p>
          This project was coded by 💙💛{" "}
          <a
            href="https://github.com/shcher-olha"
            target="_blank"
            rel="noreferrer"
          >
            Shcherbak Olha
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/shcher-olha/my-reactproject-week-6"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://my-reactproject-week-6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

 
