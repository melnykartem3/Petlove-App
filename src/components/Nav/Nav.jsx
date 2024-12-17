import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import icons from '../../images/sprite/sprite.svg';
import UserNav from '../UserNav/UserNav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import { selectIsLoggedIn } from '../../redux/users/selectors.js';
import css from './Nav.module.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const theme = isHomePage ? 'light' : 'default';

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  const getActiveClass = (isActive, isLightTheme) => {
    if (isActive) {
      return isLightTheme ? css.lightListItemActive : css.defaultListItemActive;
    }
    return '';
  };

  return (
    <nav className={css.navigation}>
      <NavLink to="/home" className={css.logoLink}>
        <svg className={css.logoIcon}>
          <use href={`${icons}#logo${isHomePage ? 'White' : ''}`} />
        </svg>
      </NavLink>

      <ul className={clsx(css.list, css.desktopList)}>
        <li
          className={clsx(
            css.listItem,
            css[`${theme}ListItem`],
            getActiveClass(location.pathname === '/news', theme === 'light'),
          )}
        >
          <NavLink to="/news" className={clsx(css.link, css[`${theme}Link`])}>
            News
          </NavLink>
        </li>
        <li
          className={clsx(
            css.listItem,
            css[`${theme}ListItem`],
            getActiveClass(location.pathname === '/notices', theme === 'light'),
          )}
        >
          <NavLink
            to="/notices"
            className={clsx(css.link, css[`${theme}Link`])}
          >
            Find pet
          </NavLink>
        </li>
        <li
          className={clsx(
            css.listItem,
            css[`${theme}ListItem`],
            getActiveClass(location.pathname === '/friends', theme === 'light'),
          )}
        >
          <NavLink
            to="/friends"
            className={clsx(css.link, css[`${theme}Link`])}
          >
            Our friends
          </NavLink>
        </li>
      </ul>
      <div className={css.tabletWrapper}>
        <div className={clsx(css.desktopNav)}>
          {isLoggedIn ? <UserNav theme={theme} /> : <AuthNav theme={theme} />}
        </div>

        <div className={css.userWrapper}>
          <button onClick={toggleMenu} className={css.burgerBtn}>
            <svg className={css.burgerIcon}>
              <use href={`${icons}#${isHomePage ? 'whiteBurger' : 'burger'}`} />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          css.menu,
          { [css.menuOpen]: isMenuOpen },
          { [css.lightMenu]: isHomePage },
        )}
      >
        <button onClick={closeMenu} className={css.crossBtn}>
          <svg className={css.crossIcon}>
            <use href={`${icons}#crossModal${isHomePage ? '' : 'White'}`} />
          </svg>
        </button>
        <ul className={css.list}>
          <li
            className={clsx(
              css.listItem,
              css[`${theme}ListItem`],
              getActiveClass(location.pathname === '/news', theme === 'light'),
            )}
          >
            <NavLink to="/news" className={clsx(css.link, css[`${theme}Link`])}>
              News
            </NavLink>
          </li>
          <li
            className={clsx(
              css.listItem,
              css[`${theme}ListItem`],
              getActiveClass(
                location.pathname === '/notices',
                theme === 'light',
              ),
            )}
          >
            <NavLink
              to="/notices"
              className={clsx(css.link, css[`${theme}Link`])}
            >
              Find pet
            </NavLink>
          </li>
          <li
            className={clsx(
              css.listItem,
              css[`${theme}ListItem`],
              getActiveClass(
                location.pathname === '/friends',
                theme === 'light',
              ),
            )}
          >
            <NavLink
              to="/friends"
              className={clsx(css.link, css[`${theme}Link`])}
            >
              Our friends
            </NavLink>
          </li>
        </ul>
        {isLoggedIn ? (
          <LogOutBtn theme={theme} inMenu={true} />
        ) : (
          <AuthNav theme={theme} />
        )}
      </div>
    </nav>
  );
}
