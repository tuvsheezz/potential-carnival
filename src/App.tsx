import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3/:id",
    element: <Page3 />,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

