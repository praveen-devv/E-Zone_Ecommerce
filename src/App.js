import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Contact from './Contact';
import ChooseUs from './ChooseUs';
import { useEffect } from 'react';
import Checkout from './Checkout';
import About from './About';
import Stabilizers from './Stabilizers';
import Heaters from './Heaters';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import ScrollToTop from './ScrollToTop';
import Orders from './Orders';

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      console.log("user is >>>",authuser);
      if(authuser){
        dispatch({
          type:'SET_USER',
          user:authuser

        })
      } 
      else{
        dispatch({
          type:'SET_USER',
          user:null

        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/login" >
            <Login />
            <Footer />
          </Route>
          <Route path="/signup">
            <Signup />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />  
          </Route>
          <Route path="/stabilizers">
            <Header />
            <Stabilizers />
            <Footer />
          </Route>
          <Route path="/heaters">
            <Header />
            <Heaters />
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />  
            <Home />
            <ChooseUs />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
