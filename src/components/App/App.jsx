import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MainLayout from '../MainLayout/MainLayout.jsx';
import Loader from '../Loader/Loader.jsx';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const NewsPage = lazy(() => import('../../pages/NewsPage/NewsPage.jsx'));
const NoticesPage = lazy(() =>
  import('../../pages/NoticesPage/NoticesPage.jsx'),
);
const OurFriendsPage = lazy(() =>
  import('../../pages/OurFriendsPage/OurFriendsPage.jsx'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage.jsx'),
);

const ProfilePage = lazy(() =>
  import('../../pages/ProfilePage/ProfilePage.jsx'),
);
const AddPetPage = lazy(() => import('../../pages/AddPetPage/AddPetPage.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'news',
        element: (
          <Suspense fallback={<Loader />}>
            <NewsPage />
          </Suspense>
        ),
      },
      {
        path: 'notices',
        element: (
          <Suspense fallback={<Loader />}>
            <NoticesPage />
          </Suspense>
        ),
      },
      {
        path: 'friends',
        element: (
          <Suspense fallback={<Loader />}>
            <OurFriendsPage />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<Loader />}>
            <RegistrationPage />
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<Loader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: 'add-pet',
        element: (
          <Suspense fallback={<Loader />}>
            <AddPetPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
