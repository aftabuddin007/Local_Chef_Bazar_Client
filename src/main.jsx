import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/Root.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Contexts/AuthProvider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider>
       <RouterProvider router={router}></RouterProvider>,
<ToastContainer />
</AuthProvider>
      
  </StrictMode>,
)
