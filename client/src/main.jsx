import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './containers/Home/HomePage.jsx';
import SingleBlog from './containers/Blogs/SingleBlog.jsx';
import Usertype from './containers/Projects/UserType.jsx';
import ClientPage from './containers/Projects/ClientPage.jsx';
import ConsultantPage from './containers/Projects/ConsultantPage.jsx';
import AboutPage from './containers/AboutPage.jsx';
import ProjectDetailPage from './containers/Projects/ProjectDetailPage.jsx';
import ThreeD from './containers/ThreeD.jsx';
import UserAuthForm from './containers/User/UserAuthForm.jsx';
import NotFound from './containers/NotFound.jsx'; // Import NotFound

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/blogs/:id',
        element: <SingleBlog />,
      },
      {
        path: '/project',
        element: <Usertype />,
      },
      {
        path: '/project/client',
        element: <ClientPage />,
      },
      {
        path: '/project/consultant',
        element: <ConsultantPage />,
      },
      {
        path: '/project/:id',
        element: <ProjectDetailPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/threed',
        element: <ThreeD />,
      },
      {
        path: '/signin',
        element: <UserAuthForm type="sign-in" />, // Corrected quotes
      },
      {
        path: '/signup',
        element: <UserAuthForm type="sign-up" />, // Corrected here
      },
      // Catch-all route for 404
      {
        path: '*',
        element: <NotFound />, // Use the NotFound component here
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
