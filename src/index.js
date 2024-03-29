import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Skills from './pages/Skills/Skills'
import Project from './pages/Project/Project'
import Contact from './pages/Contact/Contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Education",
    element: <Education/>,
  },
  {
    path: "Skills",
    element: <Skills/>,
  },
  {
    path: "Project",
    element: <Project/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
