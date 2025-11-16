import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './layouts/RootLayout.tsx';
import Profile from './components/Profile.tsx';
import { Provider } from "react-redux"
import store from './redux/store.ts';
import Assets from './components/pages/Assets.tsx';
import Uploads from './components/pages/Uploads.tsx';
import Payments from './components/pages/Payments.tsx';
import Posts from './components/pages/Posts.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "posts", element: <Posts /> },
      { path: "assets", element: <Assets /> },
      { path: "uploads", element: <Uploads /> },
      { path: "payments", element: <Payments /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
