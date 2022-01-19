import './Header.css';
import { logout } from '../../Services/users';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

export default function Header({ user, setUser, home, auth, userpage }) {
  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  };
  const handleAuth = () => {
    history.push('/auth');
  };
  const handleUserpage = () => {
    history.push('/journals');
  };
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <header>
      <h3 className={classNames({ active: home })} onClick={handleHome}>
        Home
      </h3>
      <h3 className={classNames({ active: auth })} onClick={handleAuth}>
        Log In
      </h3>
      <h3 className={classNames({ active: userpage })} onClick={handleUserpage}>
        Journals
      </h3>
      {user && <h3 onClick={handleLogout}>LogOut</h3>}
    </header>
  );
}
