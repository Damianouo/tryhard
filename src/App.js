import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Root from './routes/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
  ]);

  return (
    <div className="app">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
