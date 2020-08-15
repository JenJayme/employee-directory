import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Gallery from '../src/components/gallery'
import EmployeeTable from '../src/components/table'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/components/pawnee-seal.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>City of Pawnee Employee Directory</h1>
      </header>
      <Container>
        <div>
            <EmployeeTable />
        </div>
      </Container>

    </div>
  );
}

export default App;