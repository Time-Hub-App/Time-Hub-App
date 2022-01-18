import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Auth from './Views/Auth/Auth.js';
import User from './Views/User/User';
import Journal from './Views/Journal/Journal.js';
import About from './Views/About/About.js';
import { useEffect, useState } from 'react';
import { getUser, logout } from './Services/users';

function App() {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const session = getUser();

    if (session?.user) setUser(session.user);
  }, []);

  const logoutUser = async () => {
    await logout();
    setUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user && (
              <><Home /><button onClick={logoutUser}>Log out</button></>
            )}
            {!user && <Auth setUser={setUser} />}
          </Route>
          {/* <Route exact path="/auth">
            <Auth setUser={setUser} />
          </Route> */}
          <Route exact path="/:username">
            <User />
          </Route>
          <Route exact path=":username/edit" />
          <Route exact path="/:username/:journal">
            <Journal />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
