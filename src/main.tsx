import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home.tsx';
import ShowCreators from './pages/ShowCreators.tsx';
import AddCreator from './pages/AddCreator.tsx';
import ViewCreator from './pages/ViewCreator.tsx';
import EditCreator from './pages/EditCreator.tsx';
import DeleteCreator from './pages/DeleteCreator.tsx';

import {
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <ShowCreators />,
      },
      {
        path: '/view-creator/:id',
        element: <ViewCreator />,
      },
      {
        path: '/view-creator/:id/edit',
        element: <EditCreator />
      },
      {
        path: '/view-creator/:id/delete',
        element: <DeleteCreator />
      },
      {
        path: '/add-creator',
        element: <AddCreator />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
