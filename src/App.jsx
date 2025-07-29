import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Header from './components/Header';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;