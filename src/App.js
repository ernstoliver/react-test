import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import Main from './main/Main';
import Footer from './footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
