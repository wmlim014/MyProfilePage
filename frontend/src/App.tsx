import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import DefaultAssets from './pages/Assets/DefaultAssets';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World: Home</div>,
  },
  {
    path: "/assets",
    element: <DefaultAssets />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
