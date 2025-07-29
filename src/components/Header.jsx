import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
            Professional Blog
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/create" 
                  className={`hover:text-blue-600 transition-colors ${isActive('/create') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                >
                  Write Post
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`hover:text-blue-600 transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;