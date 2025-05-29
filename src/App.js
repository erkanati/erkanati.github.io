
import { Box, Container } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Footer from './components/Footer/Footer';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router basename="/erkanati.github.io">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/skills" element={<Skills />} />
  </Routes>
</Router>
  );
}

export default App;

