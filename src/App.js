import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom"
import { LocalGasStation } from '@material-ui/icons';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //Only run once when the app component loads
    // its like an if staatement in react but dynamic
    auth.onAuthStateChanged(authUser => {
      console.log("The User is >>>", authUser);
      if (authUser) {
        //user just logged in || if user was already ligged in. This will be fired when user refreshes page
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }
    , [])
  return (
    //BEM convention
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* Header*/}
          <Route path="/checkout">

            <Header />
            {/* <h1> I AM CHECKOUT , SMASH THE LIKE BUTTON</h1> */}
            <Checkout />

          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
