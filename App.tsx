
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './src/components/Layout';
import Home from './src/pages/Home';
import Product from './src/pages/Product';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Careers from './src/pages/Careers';
import JobView from './src/pages/JobView';
import Blog from './src/pages/Blog';
import BlogView from './src/pages/BlogView';
import Privacy from './src/pages/Privacy';
import Terms from './src/pages/Terms';
import CookieSettings from './src/pages/CookieSettings';
import Changelog from './src/pages/Changelog';
import Documentation from './src/pages/Documentation';
import { Pricing } from './src/components/Pricing'; 

// Placeholder pages for routing completeness
const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center text-white">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-400">Page under construction for Avenstek Demo.</p>
    </div>
  </div>
);

// Component to handle scroll restoration on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<div className="pt-10"><Pricing /></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobView />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogView />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<CookieSettings />} />
          <Route path="/login" element={<Placeholder title="Login to Flownyx" />} />
          <Route path="/signup" element={<Placeholder title="Create Account" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
