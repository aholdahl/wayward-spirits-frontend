import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App/App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RecipeForm from './components/RecipeForm/RecipeForm';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/recipes/new",
        element: <RecipeForm />
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetail />
      },
      {
        path: "/recipes/:id/edit",
        element: <RecipeForm />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);