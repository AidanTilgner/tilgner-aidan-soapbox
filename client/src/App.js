import './App.scss';
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
//pages
import EssayView from './pages/EssayView/EssayView';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Topics from './pages/Topics/Topics';
import Upload from './pages/Upload/Upload';
import UserProfile from './pages/UserProfile/UserProfile';

//components
import Navbar from './components/Navbar/Navbar';
import FooterNav from './components/FooterNav/FooterNav';
import React from 'react';
import axios from 'axios';

//axios stuff
const API_PORT = 8080;
const API_URL = `http://localhost:${API_PORT}`;

class App extends React.Component {
  state={
    username: "aidantilgner02"
  }

  componentDidMount = () => {
    // axios.get(`${API_URL}/users/${this.state.username}`)
    // .then(res => {
    //   this.setState({

    //   })
    // })
  } 

  render(){
    return (
      <div className="App">
          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home'>
                <Home/>
            </Route> 
            <Route path="/search/:query">
              <Search/>
            </Route>
            <Route 
              exact path="/essay/:id"
              render={props => {
                return(
                  <EssayView {...props}/>
                )
              }}
            />
            <Route path="/topics">
              <Topics/>
            </Route>
            <Route 
              path="/upload"
              render={props => {
                return(
                  <Upload {...props}/>
                )
              }}
            />
            <Route 
              exact path="/user/:username"
              render={props => {
                return(
                  <UserProfile {...props}/>
                )
              }}
            />
          </Switch>
      </div>
    );
  }
}

export default App;
