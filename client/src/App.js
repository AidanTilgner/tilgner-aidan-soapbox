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
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path='/home'
            render={props => {
              <Home {...props}/>
            }}
          />
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
      <Footer/>
    </div>
  );
}

export default App;
