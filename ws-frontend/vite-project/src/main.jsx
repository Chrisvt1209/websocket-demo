import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import Root from "./root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [{
            index: true,
            element: <App/>
        }]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
