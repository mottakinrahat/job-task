import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import ShowList from './Component/ShowList/ShowList.jsx';
import ShowDetailData from './Component/ShowDetailData/ShowDetailData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
    element:<ShowList></ShowList>,
    
    },
    {
      path:'showDetails/:id',
      element:<ShowDetailData></ShowDetailData>,
      loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
