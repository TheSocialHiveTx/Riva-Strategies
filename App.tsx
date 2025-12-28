
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import IndustriesHub from './pages/IndustriesHub';
import IndustryDetail from './pages/IndustryDetail';
import ServicesHub from './pages/ServicesHub';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<IndustriesHub />} />
          <Route path="/industries/:industrySlug" element={<IndustryDetail />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/contact" element={<Contact />} />
          {/* Default catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
