import { Link } from 'react-router-dom';
import clsx from 'clsx';
import icons from '../../images/sprite/sprite.svg';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../redux/users/selectors.js';
import css from './UserBar.module.css';

export default function UserBar({ theme = 'default' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <Link
      to="/profile"
      className={clsx(css.iconLink, css[`${theme}IconLink`])}
      aria-label="User Profile"
    >
      <div className={css.iconWrapper}>
        <svg className={css.userIcon} aria-hidden="true">
          <use href={`${icons}#user`} />
        </svg>
      </div>
      <span className={css.userName}>{userName}</span>
    </Link>
  );
}
