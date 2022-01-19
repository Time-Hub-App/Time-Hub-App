import { NavLink } from 'react-router-dom';
import './Header.css';
import { logout } from '../../Services/users';

export default function Header({ user }) {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/auth">Auth</NavLink>
      <NavLink to={`/${user}`}></NavLink>
      <h3 onClick={logout}>LogOut</h3>
    </header>
  );
}
