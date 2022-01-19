import './User';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import JournalList from '../../Components/JournalList/JournalList';
import { NavLink } from 'react-router-dom';

export default function User() {
  return (
    <div>
      <Header />
      <NavLink to="/add">Create Journal</NavLink>
      <JournalList />
      <Footer />
    </div>
  );
}
