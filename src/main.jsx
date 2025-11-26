import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import UserDetail from './components/UserDetail.jsx';
import StudentDetails from './components/StudentDetails.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path:'users/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserDetail
      },
      {
        path:'students/:id',
        loader:({params})=>fetch(`http://localhost:3000/students/${params.id}`),
        Component: StudentDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
