import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import Home from "./pages/Home";



function App() {
  return (
    <>
    <Router>
     <NavBar/>
     <div className="container">
     <Switch>
       <Route exact path="/discover" component={Discover} />
       <Route exact path="/search" component={Search} />
       <Route component={Home} />
     </Switch>
     </div>
    </Router>
    </>
  );
}

export default App;
