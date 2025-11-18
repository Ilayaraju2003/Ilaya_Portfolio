import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Projectwork from './components/projectwork/Projectwork';
import Nav from './components/nav/Nav';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Nav />
      <Skills />
      <Projectwork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
