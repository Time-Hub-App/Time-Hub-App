import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Auth from './Views/Auth/Auth.js';
import User from './Views/User/User';
import Journal from './Views/Journal/Journal.js';
import About from './Views/About/About.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/:username">
            <User />
          </Route>
          <Route exact path="/:username/:jounal">
            <Journal />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
