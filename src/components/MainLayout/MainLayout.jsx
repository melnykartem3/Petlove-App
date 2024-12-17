import { Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Header from '../../components/Header/Header.jsx';
import css from './MainLayout.module.css';

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <div
      className={clsx(css.container, {
        [css.containerHomePage]: isHomePage,
      })}
    >
      {!isHomePage && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
