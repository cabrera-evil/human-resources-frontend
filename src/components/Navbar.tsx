import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const options = ['Departments', 'Roles', 'Employees', 'Personal Info'];
  const [selectedCategory, setSelectedCategory] = useState<string>('Collections');
  const { deleteToken } = useAuth();
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    navigate(`/${category.toLowerCase().replace(' ', '-')}`);
  };

  function handleLogout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    deleteToken();
  }

  return (
    <div className="w-full bg-white fixed top-0">
      <div className="mx-auto py-5 px-7">
        <nav className="flex justify-between">
          <Link to="/home">
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <img src="/src/assets/logo.jpg" alt="logo" className="w-10 h-10" />
              <h2 className="font-normal text-2xl leading-6 text-gray-800">Human Resources</h2>
            </div>
          </Link>
          <ul className="hidden md:flex flex-auto space-x-2">
            {options.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-100 ${selectedCategory === category
                  ? 'text-white bg-indigo-600 hover:bg-indigo-700'
                  : 'text-gray-600 border border-white bg-gray-50'
                  } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                {category}
              </li>
            ))}
          </ul>

          <div className="flex space-x-5 justify-center items-center pl-2">
            <button
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2.5 font-normal text-xs leading-3 text-white bg-red-500 rounded shadow-md hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;