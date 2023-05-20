import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Myfunction from './components/MyFunction'
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <>
      Hi i am here
      <Myfunction name="Nishit" city="Anand" />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home name="Home"/>}></Route> 
          <Route path="/about" element={<About name="About"/>}></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;

