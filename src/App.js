import './App.css';
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className= "container">
        <Weather defaultCity="Barcelona" />
      <footer>This project is made by Lile Nozadze and is <a href="https://github.com/nozadzelile/weather-app-react" target="_blank" rel="noopener noreferrer">
        open-source on Github
      </a>
      </footer>
      </div>
    </div>
  );
}

