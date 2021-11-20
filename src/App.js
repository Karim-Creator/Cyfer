import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import AboutUsPage from "./pages/aboutus"
import "./index.css";
import Home from "./pages";
import BlogPage from './pages/blog'
import Contact from "./pages/contact";
import SignUpPage from "./pages/signup";
import fire from "./fire";

class App extends Component {

  // Check If The User Is Logged In Or Not
  constructor(props) {
    super(props);
    this.state = {
      //User State
      user: null,
      //Spinner State
      loading: true
    };

    //Check The State Of The User (Logged in or not)
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  //Check The Spinner State 
  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-bg");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }
  //Set a Time For The Spinner
  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render(){
    //Remove The Loader When Page Is Ready
    if (this.state.loading) {
      return null; //app is not ready
    }
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/aboutus' component={AboutUsPage} exact />
          <Route path='/blog' component={BlogPage} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/signup' component={SignUpPage} exact />
        </Switch>
      </Router>
    );
  }
  }

export default App;
