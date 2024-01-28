import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './containers/Home/HomePage.jsx';
import SingleBlog from './containers/Blogs/SingleBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path:'/',
        element: <HomePage />
      },
      {
        path:'/blogs/:id',
        element: <SingleBlog  />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
