import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import io from 'socket.io-client';
import OAuth from './components/OAuth';
import { API_URL } from './config';
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import API from "./utils/API";
// import Axios from "axios";

const socket = io(API_URL);
const providers = ['google', 'github'];

export default class App extends Component {

  state = {
    loading: true
  }

  componentDidMount = () => {
    API.wakeUp()
      .then(res => {
        if (res.ok) {
          this.setState({ loading: false })
        }
      })
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/discover" component={Discover} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/profile" component={Profile} />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
        <div className={"wrapper"}>
          <div className={"container"}>
            {providers.map(provider =>
              <OAuth
                provider={provider}
                key={provider}
                socket={socket}
              />
            )}
          </div>
        </div>
      </>
    );
  }
};



//   render() {
//     const buttons = (providers, socket) => 
//       providers.map(provider => 
//         <OAuth 
//           provider={provider}
//           key={provider}
//           socket={socket}
//         />
//       )

//     return (
//       <div className='wrapper'>
//         <div className='container'>
//           {this.state.loading
//             ? <Loading />
//             : buttons(providers, socket)
//           }
//         </div>
//         <Footer />
//       </div>
//     )
//   }
// }