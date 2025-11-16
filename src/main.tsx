import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './layouts/RootLayout.tsx';
import Profile from './components/Profile.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "posts", element: <Profile /> },
      { path: "assets", element: <App /> },
      { path: "uploads", element: <App /> },
      { path: "payments", element: <App /> },
      { path: "profile", element: <App /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
