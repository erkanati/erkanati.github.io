import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Container sx={{ flex: 1, py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
