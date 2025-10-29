import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AlertProvider } from './assets/alert/AlertContext';

// Components
import DefaultAssets from './pages/Assets/DefaultAssets';
import Alert from './assets/alert/Alert';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World: Home</div>,
  },
  { // Show all the components for the website
    path: "/assets",
    element: <DefaultAssets />,
  },
]);

function App() {
  return (
    <AlertProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <Alert />
    </AlertProvider>
  )
}

export default App
