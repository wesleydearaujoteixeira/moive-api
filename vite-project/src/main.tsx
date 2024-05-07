import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.tsx';
import { Movie } from './components/Movie.tsx';
import { Search } from './components/Search.tsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home/>,
     

      },
      {
        path: 'movie/:id',
        element: <Movie/>
      },

      {
        path: 'search',
        element: <Search/>
      }
    

    ]
    
  }


]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
