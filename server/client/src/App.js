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

// import React, { Component } from 'react'
// import io from 'socket.io-client'
// import OAuth from './OAuth'
// import { API_URL } from './config'
// import './App.css'
// const socket = io(API_URL)
// const providers = ['twitter', 'google', 'facebook', 'github']

// export default class App extends Component {

//   render() {
//     return (
//       <div className={'wrapper'}>
//         <div className={'container'}>
//           {providers.map(provider => 
//             <OAuth 
//               provider={provider}
//               key={provider}
//               socket={socket}
//             />
//           )}
//         </div>
//       </div>
//     )
//   }
// }
