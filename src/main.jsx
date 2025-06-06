import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home/Home.jsx';
import Receipes from './components/Receipes/Receipes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/receipes',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Receipes></Receipes>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
