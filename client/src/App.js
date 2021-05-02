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
import Footer from './components/FooterNav/FooterNav';
import React from 'react';
import axios from 'axios';

//axios stuff
const API_PORT = 8080;
const API_URL = `http://localhost:${API_PORT}`;

class App extends React.Component {

  state={
    recommendedEssays: [],
    recommendedTopics: []
  }

  componentDidMount = () => {
    axios.get(API_URL + '/essays')
    .then(res => {
      this.setState({
        recommendedEssays: res.data,
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
      <div className="App">
          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home'>
                <Home
                  recommendedEssays={this.state.recommendedEssays}
                  recommendedTopics={this.state.recommendedTopics}
                />
            </Route> 
            <Route path="/search/:query"
              render={props => {
                <Search {...props}/>
              }}
            />
            <Route path="/essays/:id"
              render={props => {
                <EssayView {...props}/>
              }}
            />
            <Route path="/topics"
              render={props => {
                <Topics {...props}/>
              }}
            />
            <Route path="/upload"
              render={<Upload/>}
            />
            <Route path="/user/:username"
              render={props => {
                <UserProfile {...props}/>
              }}
            />
          </Switch>
      </div>
    );
  }
}

export default App;
