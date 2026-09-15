import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Jesthel J. and is{" "}
          <a
            href="https://github.com/JesthelJhoy/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://reactweatherapp-jesthel.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
