import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './components/Error.jsx';
import Books from './components/Books/Books.jsx';
import NewBook from './components/Books/NewBook.jsx';
import Layout from './Layout.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"",
        element:<Books/>
      },
      {
        path:"/add-book",
        element:<NewBook/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
