
import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Welcome back, Admin!</span>
        </div>
      </div>
    </header>
  );
};
