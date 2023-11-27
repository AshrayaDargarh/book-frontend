import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './components/Error.jsx';
import BookList from './components/Books/BookList.jsx';
import NewBook from './components/Books/NewBook.jsx';
import Layout from './Layout.jsx';
import UpdateBook from './components/Books/UpdateBook.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"",
        element:<BookList/>
      },
      {
        path:"/add-book",
        element:<NewBook/>
      },
      {
        path:'/update-book/:id',
        element:<UpdateBook/>
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router={router}/>
  </>,
)
