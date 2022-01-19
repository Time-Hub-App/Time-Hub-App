import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Auth from './Views/Auth/Auth.js';
import User from './Views/User/User';
import Journal from './Views/Journal/Journal.js';
import About from './Views/About/About.js';
import { useState } from 'react';
import { getUser } from './Services/users';
import ProtectedRoute from './Utils/ProtectedRoute';
import AddJournal from './Views/AddJournal/AddJournal';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home user={user} setUser={setUser} />
          </Route>
          <Route exact path="/about">
            <About user={user} setUser={setUser} />
          </Route>
          <Route exact path="/auth">
            <Auth user={user} setUser={setUser} />
          </Route>
          <Route exact path="/journals/new">
            <AddJournal user={user} setUser={setUser} />
          </Route>
          <ProtectedRoute exact path="/journals" user={user}>
            <User user={user} setUser={setUser} />
          </ProtectedRoute>
          <Route exact path="/journals/:journal">
            <Journal user={user} setUser={setUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
