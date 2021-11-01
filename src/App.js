import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Component/Create';
import BlogDetails from './Component/Blogdetails.js';
import NotFound from './Component/notFound';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Create'>
              <Create />
            </Route>
            <Route exact path="/blogs/:title">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
