import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter  ,RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ForgotPage from './Pages/forgot.jsx';
import Page404 from './Pages/404.jsx';
import ProductPage from './Pages/product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <div><h1>hello</h1></div>,
    errorElement : <Page404/>
  },
  {
    path : '/login',
    element:<LoginPage/>
  },
  {
    path :'/register',
    element : <RegisterPage/>
  },
  {
    path : '/forgotpass',
    element : <ForgotPage/>
  },
  {
    path : '/products',
    element : <ProductPage />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
