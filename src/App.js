import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
      <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/postId/:id">
          <PostDetails></PostDetails>
        </Route>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="*">
          <NoMatch></NoMatch>
       </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
