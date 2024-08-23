import React, { createContext, useContext, useState } from 'react';
import { Hello } from './Hello.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//===============================================================================================================
// Theming

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Example state for the theme

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
      </ThemeContext.Provider>
  );
};

//===============================================================================================================
// Static Routes

let dynamicRoutes = [
  {
    path: "/",
    element: <Hello />
  }, {
    path: "/home",
    element: <Hello />
  }
]

// ==============================================================================
// Dynamic Routes

Object.keys(Package).forEach(function(packageName){
  if(Package[packageName].DynamicRoutes){
    // we try to build up a route from what's specified in the package
    Package[packageName].DynamicRoutes.forEach(function(route){
      dynamicRoutes.push(route);      
    });    
  }
});

// ==============================================================================
// Router

const router = createBrowserRouter(dynamicRoutes);

// ==============================================================================
// Main App

export const App = () => (
  <div>
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>      
    </React.StrictMode>
  </div>
);
