import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
