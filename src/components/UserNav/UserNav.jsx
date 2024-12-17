import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import { selectIsLoggedIn } from '../../redux/users/selectors.js';
import css from './UserNav.module.css';

export default function UserNav({ theme = 'default' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    isLoggedIn && (
      <>
        <LogOutBtn />
        <UserBar theme={theme} />
      </>
    )
  );
}
