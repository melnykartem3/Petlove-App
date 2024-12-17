import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/users/selectors.js';
import css from './AuthNav.module.css';

export default function AuthNav({ theme = 'default' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    !isLoggedIn && (
      <div className={css.linksWrapper}>
        <NavLink
          to="/login"
          className={clsx(css.logInLink, css[`${theme}LogInLink`])}
        >
          Log in
        </NavLink>
        <NavLink to="/register" className={css.registrationLink}>
          Registration
        </NavLink>
      </div>
    )
  );
}
