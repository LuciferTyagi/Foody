import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme } from '../utlis/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const storedThemePreference = localStorage.getItem('darkMode');
    if (storedThemePreference !== null) {
      dispatch(setTheme(storedThemePreference === 'true'));
    }
  }, [dispatch]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      className="px-2 py-2 mr-2 bg-teal-800 text-white rounded-full dark:bg-teal-200 transition duration-3000 ease-in-out flex items-center justify-center"
      onClick={handleToggle}
    >
      <FontAwesomeIcon 
        icon={darkMode ? faMoon : faSun} 
        className="h-6 w-6 text-white dark:text-black transition duration-300 ease-in-out" 
      />
    </button>
  );
};

export default ThemeToggle;
