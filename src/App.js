import { useEffect, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Project from './components/pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const appRef = useRef(null);

  useEffect(()=> {

    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);
      if(appRef){
        appRef.current.style.setProperty(
          '--mouse-x',
          mouseX.toString() + "%"
        )
      
        appRef.current.style.setProperty(
          '--mouse-y',
          mouseY.toString()  + "%"
        )
      }
    }
    document.addEventListener("mousemove", moveGradient);
    return function cleanup(){
      document.addEventListener("mousemove", moveGradient);

    };

  },[appRef])
  return (
    <div className="app" id="app" ref={appRef}>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route  path='/projects' component={Project}/>
        </Switch>
      </Router>
    <footer className='footer'>
      <a href="https://github.com/phancthuc">github: phancthuc</a>
      <div>email: thuc.c.phan@gmail.com</div>
    </footer>

    </div>
  );
}

export default App;
