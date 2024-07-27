import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout/PageLayout.component';
import Navbar from './components/Navbar/Navbar.component';
import Presentation from './pages/Presentation/Presentation';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Resources from './pages/Resources/Resources';
import './App.css';
import './variables.css';

const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageLayout><Presentation /></PageLayout>} />
          <Route path="/projects" element={<PageLayout><Projects /></PageLayout>} />
          <Route path="/resources" element={<PageLayout><Resources /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
        </Routes>
    </Router>
  );
};

export default App;
