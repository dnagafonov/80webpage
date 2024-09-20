import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App.tsx'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.tsx';
import Projects from './Components/Projects/Projects.tsx';
import About from './Components/About/About.tsx';
import Shop from './Components/Shop/Shop.tsx';
import Contacts from './Components/Contacts/Contacts.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "*",
    element: <ErrorBoundary />
  }
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      </RouterProvider >
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
