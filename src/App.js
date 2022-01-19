import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Auth from './Views/Auth/Auth.js';
import User from './Views/User/User';
import Journal from './Views/Journal/Journal.js';
import About from './Views/About/About.js';
import { useState } from 'react';
import { getUser } from './Services/users';
import ProctedRoute from './Utils/ProtectedRoute';
import AddJournal from './Components/AddJournal/AddJournal';

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
          <Route exact path="/auth">
            <Auth user={user} setUser={setUser} />
          </Route>
          <Route exact path="/add">
            <AddJournal />
          </Route>
          <ProctedRoute exact path="/userpage" user={user}>
            <User user={user} />
          </ProctedRoute>
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
