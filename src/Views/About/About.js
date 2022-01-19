import './About.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

export default function About() {
  return (
    <>
      <Header />
      <h1>About Us</h1>
      <div>
        <h3>Fora Heims</h3>
        <ul>
          <p>foraheims@gmail.com</p>
          <p>Github: fora-heims</p>
        </ul>
        <p>bio</p>
      </div>
      <div>
        <h3>Libbi Dunham</h3>
        <ul>
          <p>Libbi.dunham25@gmail.com</p>
          <p>Github: Libbi-Dunham</p>
        </ul>
        <p>
          I am detailed oriented critical thinker who is switching into web development. Passion for
          learning new technical knowledge and being communitive with people.
        </p>
      </div>
      <div>
        <h3>Ckay Natividad</h3>
        <ul>
          <p>Natividad.ckay@gmail.com</p>
          <p>Github: ckaynatividad</p>
        </ul>
        <p>bio</p>
      </div>
      <div>
        <h3>Abriel Cleaver</h3>
        <ul>
          <p>abrielcleaver@gmail.com</p>
          <p>Github: abrielcleaver</p>
        </ul>
        <p>bio</p>
      </div>
      <Footer />
    </>
  );
}
