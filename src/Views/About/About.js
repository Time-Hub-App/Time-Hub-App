import './About.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import logo from '../../images/TIMEHUB_LOGO.png';

export default function About({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <img src={logo} height="350px" />
      <div className="timehub-bio">
        <span>
          Why are we doing what we are doing in the first place? Recognizing your emotions is one of
          the most important skills you can have.
          <br />
          People who are good at noticing how they feel are more likely to be able calm themselves
          down and/or adjust their behavior.
        </span>
      </div>
      <div>
        <h2>Meet the Creators</h2>
      </div>
      <div className="developers-container">
        <div className="developer-bio">
          <h3 className="name">Forest Heims, Full Stack Software Developer</h3>
          <ul>
            <a href="https://www.linkedin.com/in/forestheims/">LinkedIn</a>
            <a href="https://github.com/forestheims">GitHub</a>
          </ul>
          <div>
            <p className="bio-text">Forest is a web developer in the Portland, OR area.</p>
          </div>
        </div>
        <div className="developer-bio">
          <h3 className="name">Libbi Dunham, Full Stack Software Developer</h3>
          <ul>
            <a href="https://www.linkedin.com/in/libbi-dunham/">LinkedIn</a>
            <a href="https://github.com/Libbi-Dunham">GitHub</a>
          </ul>
          <p className="bio-text">
            Libbi is a detailed oriented developer with critical thinking skills who is switching
            into web development. She has a passion for learning new technical knowledge and having
            open communication with her team.
          </p>
        </div>
        <div className="developer-bio2">
          <h3 className="name">Ckay Natividad, Full Stack Software Developer</h3>
          <ul>
            <a href="https://www.linkedin.com/in/ckaynatividad/">LinkedIn</a>
            <a href="https://github.com/ckaynatividad">GitHub</a>
          </ul>
          <p className="bio-text2">
            Ckay is a passionate developer with a versatile background ranging from visual arts to
            healthcare.{' '}
          </p>
        </div>
        <div className="developer-bio2">
          <h3 className="name">Abriel Cleaver, Full Stack Software Developer</h3>
          <ul>
            <a href="https://www.linkedin.com/in/abrielcleaver/">LinkedIn</a>
            <a href="https://github.com/abrielcleaver">GitHub</a>
          </ul>
          <p className="bio-text2">
            Abriel is a multifaceted developer with a background in Mental Health & Wellness,
            photography, and marketing who thrives when it comes to deconstructing an issue
            logically. She enjoys learning new technologies and working with diverse teams.{' '}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
