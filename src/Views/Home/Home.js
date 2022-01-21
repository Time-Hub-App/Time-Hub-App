import './Home.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import logo from '../../images/TIMEHUB_LOGO.png';

export default function Home({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} home />
      <main>
        <form>
          <img src={logo} />
          <div>
            <h3>How To Use The App!</h3>
            <p>Instructions:</p>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
