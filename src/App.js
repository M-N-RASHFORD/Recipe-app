import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from  './Pages/Home';
import Recipes from './Pages/Recipes';
import Search from './Pages/Search';
import './Styles/Home.css';

function App() {
  return (
    <div>
        <Router>
            <div>
                <nav><Link to="/">Home</Link></nav>
                <nav><Link to="/recipes">Recipes</Link></nav>
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/recipes" component={Recipes}/>
                <Route path="/search" component={Search}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
