import './About.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

export default function About() {
  return (
    <>
      <Header />
      <h1>TimeHub</h1>
      <div className="timehub-bio">
        <span>
          Journaling is a very underrated activity that boosts your well-being in just a few minutes
          a day!
          <br />A paper notebook and pen are fine for journaling, but TimeHub offers more! Jot your
          thoughts down or record what happened during the day for a simple way to manage stress,
          enhance creativity, increase happiness, and track your emotions.
        </span>
      </div>
      <div>
        <h2>Meet the Creators</h2>
      </div>
      <div className="developer-container">
        <div className="developer-bio">
          <h3 className="name">Fora Heims, Full Stack Software Developer</h3>
          <ul>
            <div>
              <a href="https://www.linkedin.com/in/fora-heims/">LinkedIn</a>
            </div>
            <div>
              <a href="https://github.com/fora-heims">GitHub</a>
            </div>
          </ul>
          <div>
            <p className="bio-text">Fora is a web developer in the Portland, Or area.</p>
          </div>
        </div>
        <div className="developer-bio">
          <h3 className="name">Libbi Dunham, Full Stack Software Developer</h3>
          <ul>
            <div>
              <a href="https://www.linkedin.com/in/libbi-dunham/">LinkedIn</a>
            </div>
            <div>
              <a href="https://github.com/Libbi-Dunham">GitHub</a>
            </div>
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
            <div>
              <a href="https://www.linkedin.com/in/ckaynatividad/">LinkedIn</a>
            </div>
            <div>
              <a href="https://github.com/ckaynatividad">GitHub</a>
            </div>
          </ul>
          <p className="bio-text2">
            Ckay is a passionate developer with a versatile background ranging from visual arts to
            healthcare.{' '}
          </p>
        </div>
        <div className="developer-bio2">
          <h3 className="name">Abriel Cleaver, Full Stack Software Developer</h3>
          <ul>
            <div>
              <a href="https://www.linkedin.com/in/abrielcleaver/">LinkedIn</a>
            </div>
            <div>
              <a href="https://github.com/abrielcleaver">GitHub</a>
            </div>
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
