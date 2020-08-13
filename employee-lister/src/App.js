import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Table } from 'react-bootstrap';
// import Gallery from '../src/components/gallery'
import EmployeeTable from '../src/components/table'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../images/pawnee-seal.png" className="App-logo" alt="logo" />
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
