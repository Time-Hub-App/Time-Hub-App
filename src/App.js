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

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
<<<<<<< HEAD

          {/* 
=======
>>>>>>> fb4e4be0c97af27a898fc72195373d66c040a41c
          {user && (
            <>
              <Home />
              <button onClick={logoutUser}>Log out</button>
            </>
          )}
<<<<<<< HEAD
          {!user && <Auth setUser={setUser} />}

          {!user && <Auth setUser={setUser} />} */}
=======
>>>>>>> fb4e4be0c97af27a898fc72195373d66c040a41c

          <Route exact path="/auth">
            <Auth setUser={setUser} />
          </Route>
<<<<<<< HEAD
=======

>>>>>>> fb4e4be0c97af27a898fc72195373d66c040a41c
          <Route exact path="/:username">
            <User />
          </Route>
          <Route exact path=":username/edit" />
          <Route exact path="/:username/:journal">
            <Journal />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
