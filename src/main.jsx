import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Services from './components/Services.jsx';

// Fonts css
import "../src/style/fonts/Fonts.scss"

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// style import
import "../src/style/Export.min.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/resume",
        element:<Resume/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
