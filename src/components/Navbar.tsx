import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

function Navbar({ isAuthenticated, onLogout }: NavbarProps) {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                DocuFlow
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="inline-flex items-center justify-center rounded-lg bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-indigo-500/25"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
