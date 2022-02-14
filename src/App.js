import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from  './Pages/Home';
import './Styles/Home.css';

function App() {
  return (
    <div>
        <Router>
            <div>
                <nav><Link to="/">Home</Link></nav>
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
