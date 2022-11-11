import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Profile from './pages/profile';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';

function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/profile',
      element: <Profile />,
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
