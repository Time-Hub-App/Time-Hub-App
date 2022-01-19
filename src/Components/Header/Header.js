import { NavLink } from 'react-router-dom';
import './Header.css';
import { logout } from '../../Services/users';

export default function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/auth">Auth</NavLink>
      <NavLink to={`/userpage`}>Userpage</NavLink>
      <h3 onClick={logout}>LogOut</h3>
    </header>
  );
}
