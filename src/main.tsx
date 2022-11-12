import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Spot from './pages/Spot';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Profile from './pages/profile';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import Navbar from './components/navbar';

function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
