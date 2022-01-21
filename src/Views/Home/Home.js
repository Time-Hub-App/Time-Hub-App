import './Home.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import logo from '../../images/TIMEHUB_LOGO.png';

export default function Home({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} home />
      <main>
        <img src={logo} />
        <p>
          Journaling is a very underrated activity that boosts your well-being in just a few minutes
          a day!
        </p>
        <p>
          A paper notebook and pen are fine for journaling, but TimeHub offers more! Jot your
          thoughts down or record what happened during the day for a simple way to manage stress,
          enhance creativity, increase happiness, and track your emotions.
        </p>
        <p>Click Log In to Sign up, or click Journals to start a new Journal</p>
      </main>
      <Footer />
    </>
  );
}
