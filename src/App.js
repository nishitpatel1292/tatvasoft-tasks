import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myfunction from './components/MyFunction';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import './App.css';
import { Grid, Button } from '@mui/material';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#f2f2f2');

  const handleToggleColor = () => {
    const newColor = backgroundColor === '#f2f2f2' ? '#b3e5fc' : '#f2f2f2';
    setBackgroundColor(newColor);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor,
        transition: 'background-color 0.5s ease',
        padding: '16px',
      }}
    >
      <Grid item xs={12} style={{ marginBottom: '16px' }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home name="Home" />} />
            <Route path="/about" element={<About name="About" />} />
          </Routes>
        </Router>
      </Grid>
      <Grid item style={{ marginBottom: '6px' }}>
        <Myfunction name="Nishit" city="Anand" />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: '8px' }}
          onClick={handleToggleColor}
        >
          Toggle Color
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
