import { useHistory } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const history = useHistory();
  return (
    <footer>
      <h3 onClick={() => history.push('/about')}>About the Creators</h3>
    </footer>
  );
}
