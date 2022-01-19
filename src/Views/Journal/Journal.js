import './Journal.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

export default function Journal({ user, setUser }) {
  return (
    <div>
      <Header user={user} setUser={setUser} userpage />
      Journal
      <Footer />
    </div>
  );
}
