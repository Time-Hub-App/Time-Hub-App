import './User.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import JournalList from '../../Components/JournalList/JournalList';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function User({ user, setUser }) {
  const history = useHistory();
  return (
    <div>
      <Header user={user} setUser={setUser} userpage />
      <h2 className="create-journal" onClick={() => history.push('/journals/new')}>
        Create Journal
      </h2>
      <JournalList />
      <Footer />
    </div>
  );
}
