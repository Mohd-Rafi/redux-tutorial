import React from 'react';
import './App.css';
import Home from '../src/Page/Home/Home.jsx';
import About from './Page/About/About';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
