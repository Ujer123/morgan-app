// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
    
  return (
    <>
   <Router>
    

              <Header/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Service">
                    <Service />
                </Route>
                <Route path="/Blogs">
                    <Blogs />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer/>
        </Router> 
    </>
  );
}

export default App;
