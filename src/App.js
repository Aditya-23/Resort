import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navs from './components/Navbar';
import About from './pages/About'
import Careers from './pages/Careers'

function App() {
  return (
    <div className="App">
      <Router>
        <Navs/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rooms/" component={Rooms}></Route>
          <Route exact path="/rooms/:single" component={SingleRoom}></Route>
          <Route exact path="/about/" component={About}></Route>
          <Route exact path="/careers/" component={Careers}></Route>
          <Route ><Error/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
