import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/hero';
import Services from './components/services';
import Expect from './components/expect';
import Footer from './components/footer';
import Works from './components/Works';
import WorkDetail from './components/WorkDetail';
import Testimonials from './components/testimonials';
import ScrollToTop from './components/ScrollToTop';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Testimonials />
              <Expect />
              <Footer />
            </>
          } />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
        <ScrollToTop />
        <AIAssistant />
      </div>
    </Router>
  );
}

export default App;