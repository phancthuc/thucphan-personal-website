import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Project from './components/pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route  path='/projects' component={Project}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
