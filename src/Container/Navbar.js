import React, { useState } from 'react';
import {
  FaBell,
  FaSearch,
  FaChevronDown,
  FaPlus,
  FaRegEnvelope,
  FaRegBookmark,
} from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../Assest/logo.png';
import { Link } from 'react-router-dom';
import { MdLogin } from "react-icons/md";

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMyAppsOpen, setMyAppsOpen] = useState(false); // state for My Apps modal

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleMyAppsModal = () => {
    setMyAppsOpen(!isMyAppsOpen); // toggle the "My Apps" modal
  };

  return (
    <div>
      <nav className="bg-white border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={logo} className="w-8 h-8 rounded-full" alt="Logo" />
            <button
              className="flex items-center space-x-1 text-gray-700 border-r-2 border-gray-500 p-3"
              onClick={toggleMyAppsModal} // open My Apps modal on click
            >
              <span>My Apps</span>
              <FaChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Link to='/'  className="text-gray-700 hover:bg-gray-900 hover:text-white hover:rounded-lg border-r-2 border-gray-500 p-3">Home</Link>
            <Link to='explore' className="text-gray-700 hover:bg-gray-900 hover:text-white hover:rounded-lg border-r-2 border-gray-500 hover:border-white hover:border-r-2 p-3">Explore</Link>
          </div>
          <div className="relative">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="search"
              placeholder="Search for contacts and more..."
              className="pl-10 pr-4 py-2 border rounded-md w-80 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:bg-gray-900 hover:text-white hover:rounded-lg relative">
            <Link to='/notification'>
              <FaBell className="h-5 w-5" />
            </Link>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-900 hover:text-white hover:rounded-lg">
            <Link to='/message'>
              <FaRegEnvelope className="h-5 w-5" />
            </Link>
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-900 hover:text-white hover:rounded-lg">
            <Link to='bookmark'>
              <FaRegBookmark className="h-5 w-5" />
            </Link>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">Yael Adamson-Brown</span>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 flex items-center space-x-1">
            <FaPlus className="w-4 h-4" />
            <Link to='create'>
              <span>Create</span>
            </Link>
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white flex items-center space-x-1">
            <CiStar className="w-5 h-5" />
            <Link to='plan'>
              <span>Upgrade</span>
            </Link>
          </button>
          <button
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white flex items-center space-x-1"
            onClick={toggleModal}
          >
            <RxHamburgerMenu className="w-5 h-5" />
            <span>More</span>
          </button>
        </div>
      </nav>

      {/* My Apps Modal */}
      {isMyAppsOpen && (
        <div className="fixed top-16 left-4 w-32 bg-white shadow-lg rounded-md border p-4 z-50">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={toggleMyAppsModal}
          >
            &times;
          </button>
          <ul className="space-y-2">
            
            <li>
              <Link
                
                className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md"
              >
                <span>App 1</span>
              </Link>
            </li>
            <li>
              <Link
                
                className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md"
              >
                <span>App 2</span>
              </Link>
            </li>
            <li>
              <Link
                
                className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md"
              >
                <span>App 3</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Backdrop for My Apps */}
      {isMyAppsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          onClick={toggleMyAppsModal}
        ></div>
      )}

      {/* Modal for More Options */}
      {isModalOpen && (
        <div className="fixed top-16 right-4 w-48 bg-white shadow-lg rounded-md border p-4 z-50">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={toggleModal}
          >
            &times;
          </button>
          <ul className="space-y-2">
            <li>
              <Link
                to="login"
                className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md"
              >
                <MdLogin className="h-5 w-5 mr-2" />
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Backdrop for More Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          onClick={toggleModal}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
