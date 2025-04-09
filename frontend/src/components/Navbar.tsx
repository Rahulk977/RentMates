import React, { useState } from 'react';
import { Home, Users, MessageSquare, LogIn, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RentMates</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <NavLink icon={<Home className="h-5 w-5" />} text="Listings" />
            <NavLink icon={<Users className="h-5 w-5" />} text="Find Roommates" />
            <NavLink icon={<MessageSquare className="h-5 w-5" />} text="Chat" />
            <button className="flex items-center space-x-1 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink icon={<Home className="h-5 w-5" />} text="Listings" />
            <MobileNavLink icon={<Users className="h-5 w-5" />} text="Find Roommates" />
            <MobileNavLink icon={<MessageSquare className="h-5 w-5" />} text="Chat" />
            <div className="mt-4 px-2">
              <button className="w-full flex items-center justify-center space-x-1 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function MobileNavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}