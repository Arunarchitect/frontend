import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './containers/Home/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path:'/',
        element: <HomePage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
