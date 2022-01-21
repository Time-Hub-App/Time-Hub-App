import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <Link to="https://github.com/Time-Hub-App" className="footer-link">
        TimeHub GitHub
      </Link>
    </footer>
  );
}
