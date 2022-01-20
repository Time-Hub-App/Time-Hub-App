// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  // const history = useHistory();
  return (
    <footer>
      <Link to="https://github.com/Time-Hub-App" className="footer-link">TimeHub GitHub</Link>
      {/* <h3 onClick={() => history.push('/about')}>About the Creators</h3> */}
    </footer>
  );
}
