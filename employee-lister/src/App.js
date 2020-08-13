import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Table } from 'react-bootstrap';
import Gallery from '../src/components/gallery'

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
      <Container>
        <Table>
        <div>
          <Gallery />
        </div>
        </Table>
      </Container>

    </div>
  );
}

export default App;
