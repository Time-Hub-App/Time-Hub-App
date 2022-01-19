import { useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

export default function Home({ handleSubmit, user }) {
  const [searchBar, setSearchBar] = useState();

  return (
    <>
      <Header user={user} />
      <div>
        <form>
          <h1>TeaTime</h1>
          <div>
            <h3>How To Use The App!</h3>
            <p>instructions:</p>
          </div>
          <div>
            <input
              className="searchBar"
              type="search"
              value={searchBar}
              onChange={(e) => setSearchBar(e.target.value)}
            />
          </div>
          <div>
            <button className="save" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
