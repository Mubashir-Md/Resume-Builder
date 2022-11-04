import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resumebuild from './components/Resumebuild';
import Result from './components/Result';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resumebuild" element={<Resumebuild />} />
          <Route path="/result" element={<Result />} />
         </Routes>
      </div>
  );
}

export default App;
