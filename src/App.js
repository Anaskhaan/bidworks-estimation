<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Example from "./pages/Example";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="" Component={Home} />
          <Route path="example" Component={Example} />
        </Route>
      </Routes>
>>>>>>> b5b567ebcea4f3d577a483a6c601d3dbcc03ce3c
    </div>
  );
}

export default App;
